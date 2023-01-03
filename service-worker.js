/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "29f8712af011da9959d4695549275104"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.8824f6df.css",
    "revision": "e94ec1a50dfb576425e2c8fd1670a243"
  },
  {
    "url": "assets/img/DELETE_MESSAGE.65c61773.png",
    "revision": "65c617734369744888f4ff74b8ba49c7"
  },
  {
    "url": "assets/img/GET_MESSAGE.d8a34533.png",
    "revision": "d8a34533be1711563bbeecfee164e8a4"
  },
  {
    "url": "assets/img/GET_MESSAGES.2cdeefb5.png",
    "revision": "2cdeefb5661142bfc909e5c034dbcb7a"
  },
  {
    "url": "assets/img/MESSAGE_POST.c1720f1e.png",
    "revision": "c1720f1eab978c8fb1b2de1dddbab050"
  },
  {
    "url": "assets/img/MESSAGE_PUT.ddb8a26f.png",
    "revision": "ddb8a26f76cd9ca4fe8ca94f94752c9b"
  },
  {
    "url": "assets/img/METADATA_DELETE.d28b730f.png",
    "revision": "d28b730f55612c5eaf6d2f7748404f4f"
  },
  {
    "url": "assets/img/METADATA_GET_ALL.5fcdfd30.png",
    "revision": "5fcdfd308b4d97b3ae8666605e36d589"
  },
  {
    "url": "assets/img/METADATA_GET.82db0c9e.png",
    "revision": "82db0c9e0955334f6f3bbbe2fde5c326"
  },
  {
    "url": "assets/img/METADATA_POST.bfe605d5.png",
    "revision": "bfe605d547a563d1bb3f1d28c9246fb6"
  },
  {
    "url": "assets/img/METADATA_PUT.86f6351b.png",
    "revision": "86f6351bdbb42b780719a33ad92b991d"
  },
  {
    "url": "assets/img/relscheme.20f4bef6.png",
    "revision": "20f4bef68d64bf57625c3b91cc2d2821"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3486928d.js",
    "revision": "e249ae60d5e28c11cb1c5dba7764ee7d"
  },
  {
    "url": "assets/js/11.6c157afa.js",
    "revision": "55549af1ed6d20ef0e1bef241c30de7b"
  },
  {
    "url": "assets/js/12.fe39fc48.js",
    "revision": "65bbc134c67a83aa434a5971b949b03f"
  },
  {
    "url": "assets/js/13.0cd4056a.js",
    "revision": "ce486e5afa51e440295da51ab01cf9e1"
  },
  {
    "url": "assets/js/14.e1c2ecb4.js",
    "revision": "88449c133cb4257cbf7c5d6d1da89fe9"
  },
  {
    "url": "assets/js/15.17ac33c3.js",
    "revision": "1b8869ed39373fa183c8762c28350b19"
  },
  {
    "url": "assets/js/16.81af54d2.js",
    "revision": "29314a5ddc9764af5ce69985b66703f1"
  },
  {
    "url": "assets/js/17.5ea31959.js",
    "revision": "2cb22f87baae2f145ec99df691212479"
  },
  {
    "url": "assets/js/18.f31f9918.js",
    "revision": "19d79c4015791eabf9dadd5898cdb88f"
  },
  {
    "url": "assets/js/19.15ed83ba.js",
    "revision": "938645c2955101fbcda662adfa6c695e"
  },
  {
    "url": "assets/js/2.51fc9706.js",
    "revision": "ea577ccaa82e2d517999a3bdf16f6d07"
  },
  {
    "url": "assets/js/20.368b39db.js",
    "revision": "73aa3efbee863ee706369ca5333f6c4e"
  },
  {
    "url": "assets/js/21.4f6d16b9.js",
    "revision": "e287eb9e31a6916e01eb8631fb99b97e"
  },
  {
    "url": "assets/js/22.1b67b517.js",
    "revision": "2106869a9a9a8a9f46ec6ba0f8041a6e"
  },
  {
    "url": "assets/js/23.e62f8eb7.js",
    "revision": "6e167d1edd0b6e4f75416f458fdcff04"
  },
  {
    "url": "assets/js/24.bf6b13e8.js",
    "revision": "1392a9a317e348125f65f4b01cf4b447"
  },
  {
    "url": "assets/js/26.ddb41728.js",
    "revision": "8c81b1cd43d727680472e430d9f82d0a"
  },
  {
    "url": "assets/js/3.9da0b6dc.js",
    "revision": "bdbd19581782619b18a1e62131ebcaf0"
  },
  {
    "url": "assets/js/4.ad5c1e05.js",
    "revision": "1dbcb47074cef327f87e9a3517dfafae"
  },
  {
    "url": "assets/js/5.da4ffeba.js",
    "revision": "8acc44ba200d114be212a860c99d6d85"
  },
  {
    "url": "assets/js/6.2adfff8c.js",
    "revision": "2dd729d0c07ada51e8cd609ba203af0c"
  },
  {
    "url": "assets/js/7.6a5fb899.js",
    "revision": "1b2432bab498621be4725bffe5d79346"
  },
  {
    "url": "assets/js/8.0d6dd990.js",
    "revision": "d7c60d919482cdb3e38c0e4f77ac115f"
  },
  {
    "url": "assets/js/9.05a7404c.js",
    "revision": "810bcf1f1fb3763be01117ea59c5699c"
  },
  {
    "url": "assets/js/app.94a93bd4.js",
    "revision": "e7807050bb7ef91edf9e19ee2879011f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "eef13521bc573593b0dfc56e9a44232c"
  },
  {
    "url": "design/index.html",
    "revision": "c2ba2110682786a4718f9673e6b06531"
  },
  {
    "url": "index.html",
    "revision": "e5a636f712b38b39a0286b38e3cd34be"
  },
  {
    "url": "intro/index.html",
    "revision": "12ec8b7e53db2d61d49466e74e02e09e"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "29a0df7268628f308a2ada221a9a107d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "26989817fd63c86faec27f69128a30b4"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "173509f5d5651bbbb90649354e496eb4"
  },
  {
    "url": "software/index.html",
    "revision": "f01f3074f6559157115e26de1e7a54b4"
  },
  {
    "url": "test/index.html",
    "revision": "f65993090facc4f835858146806ef1f5"
  },
  {
    "url": "use cases/index.html",
    "revision": "90ebb2edfdde5b51adbe56f3f7843c8c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
