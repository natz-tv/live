const PLAYLIST_URL = "https://bhonat.my.id/playlist/natz.php";

let player;
let hideUITimer;

const UI = {
    video: document.getElementById('video'),
    container: document.getElementById('videoContainer'),
    overlay: document.getElementById('videoUI'),
    settingsPanel: document.getElementById('settingsPanel'),
    title: document.getElementById('videoTitle'),
    topbarTitle: document.getElementById('topbar-title'),
    channelList: document.getElementById('channel-list'),
    search: document.getElementById('search'),
    toast: document.getElementById('toast'),
    unmuteHint: document.getElementById('unmuteHint'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content')
};

const ICONS = {
    "Sports": "⚽", "Movies": "🎬", "News": "📰", "Entertainment": "🎭",
    "TV Lokal": "📺", "Music": "🎵", "Kids": "🧸", "Unsorted": "📺"
};

async function loadExternalPlaylist() {
    try {
        const response = await fetch(PLAYLIST_URL);
        if (!response.ok) throw new Error("Gagal terhubung ke server playlist");
        
        const data = await response.json();
        
        window.CHANNELS = data
            .filter(c => c.enabled !== false)
            .sort((a, b) => (a.order || 999) - (b.order || 999));
        
    } catch (error) {
        console.error("Error loading playlist:", error);
        showToast("Gagal memuat daftar channel");
        window.CHANNELS = []; 
    }
}

async function initApp() {
    await loadExternalPlaylist();

    shaka.polyfill.installAll();
    if (!shaka.Player.isBrowserSupported()) return alert("Browser tidak didukung.");

    player = new shaka.Player(UI.video);
    player.addEventListener('error', e => console.error("Error Player:", e.detail));

    renderPlaylist();
    setupEventListeners();

    if (window.CHANNELS?.length > 0) {
        loadChannel(window.CHANNELS[0]);
    }
}

function renderPlaylist() {
    UI.channelList.innerHTML = '';
    const query = UI.search.value.toLowerCase();
    const channels = window.CHANNELS || [];
    
    const fragment = document.createDocumentFragment();
    const groups = {};

    channels.forEach(ch => {
        if (query && !ch.name.toLowerCase().includes(query)) return;
        const g = ch.group || "Unsorted";
        if (!groups[g]) groups[g] = [];
        groups[g].push(ch);
    });

    Object.keys(groups).forEach(groupName => {
        const header = document.createElement('div');
        header.className = 'group-header';
        header.innerHTML = `<span>${ICONS[groupName] || ICONS["Unsorted"]}</span> ${groupName}`;
        
        const isCollapsed = localStorage.getItem(`collapse_${groupName}`) === 'true';
        
        const listWrapper = document.createElement('div');
        listWrapper.style.display = isCollapsed ? 'none' : 'block';

        header.onclick = () => {
            const willCollapse = listWrapper.style.display === 'block';
            listWrapper.style.display = willCollapse ? 'none' : 'block';
            localStorage.setItem(`collapse_${groupName}`, willCollapse);
        };

        fragment.appendChild(header);

        groups[groupName].forEach(ch => {
            const item = document.createElement('li');
            item.className = 'channel-item';
            item.innerHTML = `
                <img class="ch-logo" src="${ch.logo || ''}" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
                <span class="ch-name">${ch.name}</span>
            `;
            item.onclick = () => {
                document.querySelectorAll('.channel-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
                loadChannel(ch);
            };
            listWrapper.appendChild(item);
        });

        fragment.appendChild(listWrapper);
    });

    UI.channelList.appendChild(fragment);
}

async function loadChannel(ch) {
    try {
        UI.title.textContent = ch.name;
        UI.topbarTitle.textContent = "Sedang tayang: " + ch.name;
        UI.settingsPanel.style.display = 'none';

        const drmConfig = {};
        if (ch.drm) {
            if (ch.drm.type === 'clearkey' && ch.drm.key) {
                const [kid, key] = ch.drm.key.split(':');
                if(kid && key) drmConfig.clearKeys = { [hexToBase64(kid)]: hexToBase64(key) };
            } else if (ch.drm.type === 'widevine' && ch.drm.licenseUrl) {
                drmConfig.servers = { 'com.widevine.alpha': ch.drm.licenseUrl };
            }
        }

        await player.configure({ drm: drmConfig, abr: { enabled: true } });
        await player.load(ch.url);
        
        buildSettingsMenu();
        UI.video.play().catch(() => {});

    } catch (e) {
        showToast("Gagal memuat tayangan");
        console.error(e);
    }
}

function buildSettingsMenu() {
    const qTab = document.getElementById('tab-quality');
    const aTab = document.getElementById('tab-audio');
    qTab.innerHTML = ''; aTab.innerHTML = '';

    const tracks = player.getVariantTracks();
    const isAbr = player.getConfiguration().abr.enabled;
    const activeTrack = tracks.find(t => t.active);

    const heights = [...new Set(tracks.map(t => t.height).filter(Boolean))].sort((a,b) => b - a);
    
    qTab.appendChild(createOptBtn("Auto", "ABR Berjalan", isAbr, () => {
        player.configure({ abr: { enabled: true } });
        buildSettingsMenu(); showToast("Kualitas: Auto");
    }));

    heights.forEach(h => {
        const tr = tracks.find(t => t.height === h);
        const kbps = tr.bandwidth ? Math.round(tr.bandwidth / 1000) + ' kbps' : '';
        const isActive = !isAbr && activeTrack?.height === h;

        qTab.appendChild(createOptBtn(`${h}p`, kbps, isActive, () => {
            player.configure({ abr: { enabled: false } });
            player.selectVariantTrack(tr, true);
            buildSettingsMenu(); showToast(`Kualitas: ${h}p`);
        }));
    });

    const audios = [...new Set(tracks.map(t => t.language || 'und'))];
    
    if (audios.length <= 1) {
        aTab.appendChild(createOptBtn("Default", "Audio Utama", true, () => {}));
    } else {
        aTab.appendChild(createOptBtn("Auto", "Default System", !player.getConfiguration().preferredAudioLanguage, () => {
            player.configure({ preferredAudioLanguage: "" });
            buildSettingsMenu(); showToast("Audio: Auto");
        }));

        audios.forEach(lang => {
            const isActive = player.getConfiguration().preferredAudioLanguage === lang;
            aTab.appendChild(createOptBtn(lang.toUpperCase(), "Bahasa", isActive, () => {
                player.configure({ preferredAudioLanguage: lang });
                buildSettingsMenu(); showToast(`Audio: ${lang.toUpperCase()}`);
            }));
        });
    }
}

function createOptBtn(title, subtitle, isActive, onClick) {
    const btn = document.createElement('button');
    btn.className = `opt-btn ${isActive ? 'active' : ''}`;
    btn.innerHTML = `${title} <small>${subtitle}</small>`;
    btn.onclick = onClick;
    return btn;
}

function setupEventListeners() {
    UI.search.addEventListener('input', renderPlaylist);

    const showUI = () => {
        UI.overlay.classList.remove('hidden');
        clearTimeout(hideUITimer);
        if (UI.settingsPanel.style.display === 'none') {
            hideUITimer = setTimeout(() => UI.overlay.classList.add('hidden'), 2500);
        }
    };

    UI.container.addEventListener('mousemove', showUI);
    UI.container.addEventListener('click', (e) => {
        showUI();
        UI.video.muted = false; 
        UI.unmuteHint.style.display = 'none';
        
        if(!e.target.closest('#settingsPanel') && !e.target.closest('#btnSettings')){
            UI.settingsPanel.style.display = 'none';
        }
    });

    document.getElementById('btnSettings').onclick = () => {
        const isHidden = UI.settingsPanel.style.display === 'none';
        UI.settingsPanel.style.display = isHidden ? 'flex' : 'none';
        if(isHidden) clearTimeout(hideUITimer); 
    };

    document.getElementById('btnFs').onclick = async () => {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            try {
                if (UI.container.requestFullscreen) await UI.container.requestFullscreen();
                else if (UI.container.webkitRequestFullscreen) await UI.container.webkitRequestFullscreen();
                else if (UI.video.webkitEnterFullscreen) UI.video.webkitEnterFullscreen(); 

                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock('landscape').catch(() => {});
                }
            } catch (err) {
                console.log("Gagal masuk fullscreen:", err);
            }
        } else {
            if (document.exitFullscreen) await document.exitFullscreen();
            else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
            
            if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock();
        }
    };

    UI.tabBtns.forEach(btn => {
        btn.onclick = () => {
            UI.tabBtns.forEach(b => b.classList.remove('active'));
            UI.tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`tab-${btn.dataset.target}`).classList.add('active');
        };
    });
}

function hexToBase64(hex) {
    const bytes = new Uint8Array(hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function showToast(msg) {
    UI.toast.textContent = msg;
    UI.toast.classList.add('show');
    setTimeout(() => UI.toast.classList.remove('show'), 2000);
}

document.addEventListener('DOMContentLoaded', initApp);
