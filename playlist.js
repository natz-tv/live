// PLAYLIST TERTANAM (rapih)
// - enabled: false -> disembunyikan dari list
// - order: angka kecil tampil dulu
// - group: kategori untuk pengelompokan (TV Lokal, Sports, Movies, dll)
// - drm:
//    - clearkey: pakai key "KID:KEY" (HEX 32:HEX 32)
//    - widevine: pakai licenseUrl
//    - none: kosongkan drm
const channels = [
  {
    name: "BEIN SPORTS 1",
    group: "Sports",
    order: 1,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/bein1.png",
    url: "https://aivottepl-a.akamaihd.net/syd-nitro/live/clients/dash/enc/ghwcl6hv68/out/v1/83536910d8034e9b9895a20fbe1c1687/cenc.mpd",
    drm: { type: "clearkey", key: "335dad778109954503dcbb21dc92015f:24bfd75d436cbf73168a2a2dccd40281" }
  },
  {
    name: "BEIN SPORTS 2",
    group: "Sports",
    order: 2,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/bein2.png",
    url: "https://aivottepl-a.akamaihd.net/syd-nitro/live/clients/dash/enc/8m8cd46i1t/out/v1/83985c68e4174e90a58a1f2c024be4c9/cenc.mpd",
    drm: { type: "clearkey", key: "0b42be2664d7e811d04f3e504e0924c5:ae24090123b8c72ac5404dc152847cb8" }
  },
  {
    name: "BEIN SPORTS 3",
    group: "Sports",
    order: 3,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/bein3.png",
    url: "https://aivottepl-a.akamaihd.net/syd-nitro/live/clients/dash/enc/q4u5nwaogz/out/v1/18de6d3e65934f3a8de4358e69eab86c/cenc.mpd",
    drm: { type: "clearkey", key: "7995c724a13748ed970840a8ab5bb9b3:67bdaf1e2175b9ff682fcdf0e2354b1e" }
  },
  {
    name: "TNT SPORTS 1",
    group: "Sports",
    order: 4,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/tnt1.png",
    url: "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/cllekigzzn/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd",
    drm: { type: "clearkey", key: "294b5761cefc22d0c6312939e13d8278:52148f1042d238849f0a7813f1da8a7b" }
  },
  {
    name: "TNT SPORTS 2",
    group: "Sports",
    order: 5,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/tnt2.png",
    url: "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/fb6jy4pxts/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
    drm: { type: "clearkey", key: "f288380ca4cef9ad3f27a92a08e9bb8b:9f18d26291d9230833501f7f822f6875" }
  },
  {
    name: "TNT SPORTS 3",
    group: "Sports",
    order: 6,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/tnt3.png",
    url: "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/5sxuux529k/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
    drm: { type: "clearkey", key: "1d96ab366bbe6451edf7407b58e2fa16:0116201f4a63ac5bf5787d2c610c41a7" }
  },
  {
    name: "TNT SPORTS 4",
    group: "Sports",
    order: 7,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/tnt4.png",
    url: "https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/pnu10tp36z/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
    drm: { type: "clearkey", key: "192b1115da041585c77200128549efa1:634e10efe4abbb14be400a3ccbac0258" }
  },
  {
    name: "FUBO SPORTS 1",
    group: "Sports",
    order: 8,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/fubo.png",
    url: "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd",
    drm: { type: "clearkey", key: "dc69b6159a0f9f0a4e03b3ff91cbacd5:d0dcbcd7723bc40df0bf34c9c092d51f" }
  },
  {
    name: "FUBO SPORTS 2",
    group: "Sports",
    order: 9,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/fubo.png",
    url: "https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/uiffe4jhf0/out/v1/3534efafca8c4815adbb4d2e9a1fe003/cenc.mpd",
    drm: { type: "clearkey", key: "3dcfbec0e7146928baa55210bf2cb62f:bc85f74f815d9be5ae1dd6defaa05135" }
  },
  {
    name: "FOX SPORTS 1",
    group: "Sports",
    order: 10,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/fs1.png",
    url: "https://aivottepl-a.akamaihd.net/pdx-nitro/live/clients/dash/enc/tmpzbbdj9y/out/v1/962736723a534ba294e7592fef49827b/cenc.mpd",
    drm: { type: "clearkey", key: "5466ebd70704bdeb657f0abf3c5ca4ef:bdd79b72d8e48ed483aa623cc38a8a16" }
  },
  {
    name: "FOX SPORTS 2",
    group: "Sports",
    order: 11,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/fs2.png",
    url: "https://aivottepl-a.akamaihd.net/pdx-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd",
    drm: { type: "clearkey", key: "09453ce820d65fbc675de3185f9e454c:98cff9600995fa381c76fdacf3c7edae" }
  },
  {
    name: "LALIGA TV",
    group: "Sports",
    order: 12,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/laligatv.png",
    url: "https://aivottepl-a.akamaihd.net/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd",
    drm: { type: "clearkey", key: "620e51b82596475517a27aa425c52280:2b9ba811e9c5aeafc8ae1b71cdca4d6a" }
  },
  {
    name: "PREMIER SPORTS 1",
    group: "Sports",
    order: 14,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/premiersp1.png",
    url: "https://aivottepl-a.akamaihd.net/lhr-nitro/live/clients/dash/enc/m6sqanvm2m/out/v1/f6beb46c6e9a4132ad739f3ca27df6aa/cenc.mpd",
    drm: { type: "clearkey", key: "1444f4235529f183f0a5a486befe9cdb:e5e3fec67a1bb3472a2089c8a0a2557f" }
  },
  {
    name: "PREMIER SPORTS 2",
    group: "Sports",
    order: 15,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/premiersp2.png",
    url: "https://aivottepl-a.akamaihd.net/lhr-nitro/live/clients/dash/enc/bcj3iscpd6/out/v1/fcd137b391214f7cb99dd4d7be90ca87/cenc.mpd",
    drm: { type: "clearkey", key: "1a5df53609ebc9857898c490f4724918:77f62980d582ec541280796acf8b2d19" }
  },
  {
    name: "CBS GOLAZO",
    group: "Sports",
    order: 16,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/cbsgolazo.png",
    url: "https://aivottepl-a.akamaihd.net/lhr-nitro/live/clients/dash/enc/rbem8rorcw/out/v1/5318821e2c3c44c2a439681b9aa86e9b/cenc.mpd",
    drm: { type: "clearkey", key: "d9623774ac5c8c351aafe97c5fe70267:5164e6d05164a2d65fa8fcc962aa4861" }
  },
  {
    name: "CBS SPORTS",
    group: "Sports",
    order: 17,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/cbs.png",
    url: "https://aivottepl-a.akamaihd.net/lhr-nitro/live/clients/dash/enc/vgokgrmo8o/out/v1/a1a95c0845e64cb58d353437c56b31e8/cenc.mpd",
    drm: { type: "clearkey", key: "e219f941bc6d683b97257ed706813702:d24fefb64dec7748489ba4e405a2349e" }
  },
  {
    name: "SPOTV",
    group: "Sports",
    order: 18,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/spotv.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_spotvhd/default/index.mpd",
    drm: { type: "clearkey", key: "ec7ee27d83764e4b845c48cca31c8eef:9c0e4191203fccb0fde34ee29999129e" }
  },
  {
    name: "SPOTV2",
    group: "Sports",
    order: 19,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/spotv2.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_spotv2hd/default/index.mpd",
    drm: { type: "clearkey", key: "7eea72d6075245a99ee3255603d58853:6848ef60575579bf4d415db1032153ed" }
  },
  {
    name: "FANCODE",
    group: "Sports",
    order: 20,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/live.png",
    url: "https://aivottepl-a.akamaihd.net/sin-nitro/live/clients/dash/enc/inpyms8ezu/out/v1/1084d5c9a97a4c5b9f9554c88f486646/cenc.mpd",
    drm: { type: "clearkey", key: "065051b99bf5cf8d9a3bde5cbde6aaf9:214bd176832872339ce184338320f9a2" }
  },
  {
    name: "MEWATCH 2",
    group: "Sports",
    order: 21,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/live.png",
    url: "https://tglmp02.akamaized.net/out/v1/3170252e3fb0453085f2f4b0f8401a6b/manifest.mpd",
    drm: { type: "clearkey", key: "60dc08aae52f4c0b806a8e43f24a12c8:30d5b579966d822b215ec51a91d8a271" }
  },
  {
    name: "MEWATCH 5",
    group: "Sports",
    order: 22,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/live.png",
    url: "https://tglmp04.akamaized.net/out/v1/400fc0702dee453bb33ebcc29466e58a/manifest.mpd",
    drm: { type: "clearkey", key: "91b9592c819246c68b3b08a1fe08ba22:fa0d80dfd865b34077bae44cd4a0c5e6" }
  },
  {
    name: "MEWATCH 6",
    group: "Sports",
    order: 23,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/live.png",
    url: "https://tglmp02.akamaized.net/out/v1/cc0fc82e76cb4e0093e81695284af443/manifest.mpd",
    drm: { type: "clearkey", key: "d418f733ed224f9bb9c2b1589db22a20:6ed6fe26daa4b926810869ff60254ebb" }
  },
  {
    name: "FIFA+",
    group: "Sports",
    order: 24,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/live.png",
    url: "https://aivottepl-a.akamaihd.net/lhr-nitro/live/clients/dash/enc/filihyb6x1/out/v1/e2b737b02ca046729b34f0594a611494/cenc.mpd",
    drm: { type: "clearkey", key: "26977ba93795552a60559679ab740b38:e75175191d0ed494da3dec258bbfd74f" }
  },
  {
    name: "CINEMAX",
    group: "Movies",
    order: 1,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/cinemax.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/cinemax/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "HBO",
    group: "Movies",
    order: 3,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/hbo.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/hbo/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "HBO HITS",
    group: "Movies",
    order: 5,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/hbohits.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/hbohits/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "HBO FAMILY",
    group: "Movies",
    order: 7,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/hbofamily.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/hbofamily/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "HBO SIGNATURE",
    group: "Movies",
    order: 9,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/hbosign.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/hbosignature/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "ROCK ACTION",
    group: "Movies",
    order: 10,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/rockaction.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/ROCK_ACTION/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "K-PLUS",
    group: "Entertainment",
    order: 1,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/kplus.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/kplus/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "WARNER TV",
    group: "Entertainment",
    order: 2,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/warnertv.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/warner/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "AXN",
    group: "Entertainment",
    order: 3,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/axn.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/axn/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "ROCK ENTERTAINMENT",
    group: "Entertainment",
    order: 5,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/rockent.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/rock_entertainment/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "AL JAZEERA",
    group: "News",
    order: 1,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/aljazeera.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/aljazeera/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "DW",
    group: "News",
    order: 3,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/dw.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/DWTV/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "FRANCE 24",
    group: "News",
    order: 5,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/france24.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/FRANCE_24/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "SCTV",
    group: "TV Lokal",
    order: 1,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/sctv.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/sctv/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "INDOSIAR",
    group: "TV Lokal",
    order: 2,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/indosiar.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/indosiar/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "RCTI",
    group: "TV Lokal",
    order: 3,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/rcti.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/rcti/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "MNCTV",
    group: "TV Lokal",
    order: 4,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/mnctv.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/mnctv/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "GTV",
    group: "TV Lokal",
    order: 5,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/gtv.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/globaltv/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "INEWS",
    group: "TV Lokal",
    order: 6,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/inews.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/inews/manifest.mpd",
	drm: { type: "none" }
  },
   {
    name: "KOMPASTV",
    group: "TV Lokal",
    order: 7,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/kompastv.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/KOMPAS_TV/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "TVONE",
    group: "TV Lokal",
    order: 8,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/tvone.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/tvone/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "RTV 🇮🇩",
    group: "TV Lokal",
    order: 9,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/rtv.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/RAJAWALI_TV/manifest.mpd",
	drm: { type: "none" }
  },
  {
    name: "TVRI 🇮🇩",
    group: "TV Lokal",
    order: 10,
    enabled: true,
    logo: "https://github.com/natz-tv/logo/raw/main/tvri.png",
    url: "https://cdn10jtedge.indihometv.com/atm/DASH/TVRI/manifest.mpd",
	drm: { type: "none" }
  },

  // contoh channel dimatikan (tidak muncul)
  {
    id: "off-example",
    name: "OFFLINE (hidden)",
    group: "Testing",
    order: 999,
    enabled: false,
    logo: "",
    url: "https://example.com/offline.mpd",
    drm: { type: "none" }
  }
];

window.CHANNELS = channels;