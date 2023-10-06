'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "feec82e0e40b877cecafa0963358037f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f650967596802d43bd36ffdf209b5d97",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1b13ed12e0f0df490abad82863191312",
".git/logs/refs/heads/2023": "c630c1d067d1c88cc61ef7322b7801cf",
".git/logs/refs/heads/master": "a7f585cf2e601d19224714cdbe962777",
".git/logs/refs/remotes/origin/master": "e13c823f4fecaf508e9317bdbeb1e733",
".git/objects/01/fc8b97ab3a1f4532afb5a15b34fb184709e055": "1a8d4ea1b38128f47f6d0eba7110dcd0",
".git/objects/06/1a02246cd3f506c8fb1176958d211943883b73": "0bde14c1c04690f446fb13ac1f208abf",
".git/objects/08/73d417721c902c399395e16701f014dbe1bc2d": "b9339d76f752a112206cb4e0817dfac1",
".git/objects/15/b61177b8a5e730a1e8e9988e12133fb4c9bd45": "a35b3275ea2b6ac68df9f7629b8404ad",
".git/objects/1e/b5083dc1e9f5f9741bd99fb0c639d000d1a261": "505fddde2d9ca9955e8196599a37be9a",
".git/objects/28/cc2e1379c314a7a8e3e984a2eb1e963cc72fd7": "0255eab92abc99f1448a2b4e8be6281b",
".git/objects/2c/e9333bfb135b587b4d3cda3d0497c4db83856c": "18efe506422a1c11c90e92f2dec67d60",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/7382b045b57fa38256c16c3d10d9a92f2ddfcc": "eaeed15055830a0dd674ed5de1a1cd6d",
".git/objects/44/4c3e96e0753b08510aaf067fa48143e4b289a3": "c3a5f940f5381704cce7ec3ec6336da3",
".git/objects/51/cbc4fb67c6ae133ad21c081096f16a2c6d00d1": "2652c786aa6d0bb5b56dda831061ee2e",
".git/objects/53/4d513142726ba41fb95c095b6267414f4b348b": "7269aaaa0b3adee485add6fd57d16d1d",
".git/objects/61/a2330c3eb52c3b278918ced5771a9ec7a6fba5": "f65ba060a00fb390550791c6a7988a90",
".git/objects/75/72b2670de3e3010e7466747db9bb518197b2a7": "764899d762b28ce779513be4adef77dd",
".git/objects/81/7d418cedc7a789e8ba34624aad95068ae452d7": "b865c1d2725eab543cea0e769905b058",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/a4a2b1442957e9563ccc22d1b024ca1d5098af": "8aefe2a92a702cf8cd9331371cd1e406",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/ac/6c5faa0d915973f907ade33c1b2b6dc39dd611": "5dbc47bb5757b7f31f2c87fe2b10a6d2",
".git/objects/ad/a486f283cbd5a2034ddccdafa7895d919ea9c1": "e7944c6acc1661bba92a404efed558cf",
".git/objects/b2/e7f1f11a87115f4cb65ddada34f60981667c68": "eb071a0ea93beff7ff285d693e73b276",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/02be90d1fa4d572117f0662530cd87c18496a1": "aa0bead9c3f353e09f9e6f782a2280c1",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/8d2fc3fa5006f8d754c7a74204b0b386c862fc": "ad9c8cd9d0e3f802ddfdc5d125643203",
".git/objects/c0/7df4dc2b75c6cd325065a221cddb9d61573780": "e7c67c973626f11499e59f3c3ad4fb14",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/cb/215071ef3b33427fa864628edba48f926e3a19": "89057e5af53092cd88d99d7d7c12ac4b",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4c61df3d3a4beac2184d10c26aafd0bf16d64d": "d8f358979835a6ec106d6537d49beb65",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/99063e5afab6e9cfdec99ef6526e0519ad51f7": "e2088ce011d3cb3f9f5ddd44011519ff",
".git/objects/f1/2087c1ebf484b4d49a6033c27d9062fe8fa0ab": "e973800230219e986f58275d0ce34610",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/2023": "7d30b7b8802deb0971b0168d656b03d4",
".git/refs/heads/master": "7d30b7b8802deb0971b0168d656b03d4",
".git/refs/remotes/origin/master": "7d30b7b8802deb0971b0168d656b03d4",
"assets/AssetManifest.bin": "e8aeb7c44da32e21abe372d85eb4f082",
"assets/AssetManifest.json": "3b4b6be757cc53359aad86d071fea467",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/images/background.jpg": "eb7e911ae11290dbee7852371eed26f9",
"assets/images/bottlecap_0.png": "135e2e6e05e7270b822f891f220fc409",
"assets/images/bottlecap_1.png": "dd684f9c79042412d02fbe185a29acff",
"assets/images/bottlecap_10.png": "1af7373ed42fd1aee763b4104ca087f3",
"assets/images/bottlecap_2.png": "25189e12425b0410b82aeb7479df9689",
"assets/images/bottlecap_3.png": "b3da3dbc1e79b118fe7489d2df2f2159",
"assets/images/bottlecap_4.png": "93a2023c2285bd187ecdbe7b1e0aef9e",
"assets/images/bottlecap_5.png": "4e11352aa0b8dff3418ae10dc7c19ec3",
"assets/images/bottlecap_6.png": "8cb1c1618a0b6350bf416c44bb8e07ff",
"assets/images/bottlecap_7.png": "411c94d61f82d9d9d6e14cb36284e62b",
"assets/images/bottlecap_8.png": "5f5d0e7dbab325b773ab3ca61b7d3f8c",
"assets/images/bottlecap_9.png": "563a1c9a195aff39e3724558d652df89",
"assets/NOTICES": "5e361b2817ccad763b7515d4d7d0c43d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "136b2a8d7d052de8af316baef01d2074",
"/": "136b2a8d7d052de8af316baef01d2074",
"main.dart.js": "e5340da9b0ae5b84112330631ffe017e",
"manifest.json": "7bb6b6aae6e8c686fbb703260f864441",
"version.json": "add5080909db2c49f836b7cea9c04259"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
