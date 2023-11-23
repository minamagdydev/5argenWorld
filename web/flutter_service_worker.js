'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8e1d9ba9586a8ef185a40a70ddb51b63",
"splash/img/light-background.png": "12b3c69f41c77f469400e0b148dacdd5",
"index.html": "b05bacd4a68a2c470a9b3c1bfce637b7",
"/": "b05bacd4a68a2c470a9b3c1bfce637b7",
"main.dart.js": "2f04fe7b9cc9bf4897e48402d796188f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bf02b60d0f8e9280129922922f18122f",
"assets/AssetManifest.json": "0f3ec206ce26e63621fc3acf0ce32df4",
"assets/NOTICES": "c44216b4ed8b03faf15058b7b061b219",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "3b09fe6eb7fb7adde07d117a7fc09122",
"assets/fonts/MaterialIcons-Regular.otf": "4dd3471b638ddec3a4681eaa6553f06f",
"assets/assets/images/scoreS2.png": "90a598805a1f1d0d1e76121ab820a173",
"assets/assets/images/rewards/bazoka.jpeg": "3e3bd87000a36a4ef0723c8c655df95f",
"assets/assets/images/rewards/ticket.jpeg": "6515a3827d4e8f923b5dc618a9eb757e",
"assets/assets/images/rewards/homeR.jpeg": "b5876aae446d7c49bd2379594c0f70f8",
"assets/assets/images/rewards/dreampark.jpeg": "aed88abb029a9de09fcf40a921bf9931",
"assets/assets/images/rewards/stadium.jpeg": "5cc4a32d71e711522d3b821b882da038",
"assets/assets/images/rewards/ps.jpeg": "b2d65a47bf53c4bbec3f6aaf156fed9c",
"assets/assets/images/rewards/gold.jpeg": "b4f1be2d26daba555dd12c21520d6fba",
"assets/assets/images/rewards/rush.jpeg": "870403ea0c149e5c50a98830bbd49ee9",
"assets/assets/images/rewards/withoutwait1.jpg": "f83dc6c3ee477c5f4c61684d0686d6b1",
"assets/assets/images/rewards/moneyback.jpeg": "c90b7f10935c3a8f1cf067e659b7cd9f",
"assets/assets/images/rewards/puti.jpeg": "82043f4ceade041a4c41d1c0f0655c64",
"assets/assets/images/rewards/Friend.jpg": "7cedf3fd6b3ab2551ab6effdde15d2f2",
"assets/assets/images/rewards/withoutwait.webp": "bd0c72c653da5fdeda3eefa22cc77241",
"assets/assets/images/rewards/team.jpeg": "e925a8e40f4515331d7b0e933a19f9cc",
"assets/assets/images/rewards/offerElkber.jpeg": "b9d59278d7c7d3181616352203dddd10",
"assets/assets/images/rewards/sticky.png": "66951bb011c8489896f8d76ca193f9d1",
"assets/assets/images/rewards/WhatsApp%2520Image%25202023-11-19%2520at%252011.39.04%2520PM.jpeg": "19cfb422a98427c297023bd3ca05f5f8",
"assets/assets/images/rewards/voucher.png": "5c90c8ac60cb99c4ff28eb576baf4094",
"assets/assets/images/rewards/hotal.jpeg": "a2172f025ffc157865f4ae798490a367",
"assets/assets/images/rewards/class.jpeg": "c2bc19a8ad60b30aab72919404793a1f",
"assets/assets/images/rewards/default.png": "6c42ce6d70c0e6f811340217b9f23e69",
"assets/assets/images/rewards/Exception.png": "051ca8324f974854f91474ca6b2fb7f4",
"assets/assets/images/scoreC.png": "5ae5e6fd0419c88ad88071b9df69715d",
"assets/assets/images/background.jpg": "ee387cba3b0315fce5f7f8fd17c0fd51",
"assets/assets/images/logo.png": "965083d8b72b0c34958a74ea86fb43de",
"assets/assets/images/Frame.png": "5ce48b0d1d349b2cbb106756da5def97",
"assets/assets/images/cake.jpeg": "19cfb422a98427c297023bd3ca05f5f8",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
