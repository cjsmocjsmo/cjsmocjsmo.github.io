'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ec291f13acf403036d6199dff72a68b0",
"/": "ec291f13acf403036d6199dff72a68b0",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"assets/images/cloudflare.webp": "a0e87378a5bd269ec93512fa7d96cd6b",
"assets/images/topout_overlay.webp": "de48f86fe153be046424108ea33326aa",
"assets/images/banner.webp": "257221fa0e9f985cf12504522a4019de",
"assets/images/webp/s8.webp": "335cf1840a7c3289a24c61d9087477d6",
"assets/images/webp/s6.webp": "a56636b266d8f02f4bf1768c39d86b28",
"assets/images/webp/s9.webp": "7cee308302bd9a06fc69ca5cfa02955c",
"assets/images/webp/s4.webp": "f54a8b2015d04ab4d43e382494b51611",
"assets/images/webp/s1.webp": "c64af14a023a3c270379bd562d309ef5",
"assets/images/webp/s10.webp": "2fe244724f5986f8578679a51b97ed5c",
"assets/images/webp/s2.webp": "1bd5e4fc341e8fbf67e90370d4d054c4",
"assets/images/webp/s3.webp": "1f2a0746fb4d38315beb112c1a37874b",
"assets/images/webp/s5.webp": "f8875d3b179da0695ac1bd5d89d3b6b5",
"assets/images/webp/s7.webp": "119b445bcb63e01e014499af687969e3",
"assets/images/curt.webp": "43a7b06a5b4e679d537bb7015460e35d",
"assets/images/mason.webp": "36e4a7f67b3b047bb45c4664eba54eda",
"assets/images/pierce.webp": "4fa00ac1b7da8f2f6f166e8ac7e2db47",
"assets/images/kitsap.webp": "9084693ff03693c3a74f62abd7e9033a",
"assets/images/firebase2.webp": "3c05d58f69eb82dad3da9c1999040bb4",
"assets/images/logdrop_overlay.webp": "6301753bc98db2a53372dd4e0a72012b",
"assets/images/smallrigout_overlay.webp": "23c75e7424b460774443a70ed6e45909",
"assets/images/flutter_logo2.webp": "45f2adfe6c05cf372599228f95af79c0",
"assets/AssetManifest.json": "089acf7872ce8b7d5c98c4fc73818423",
"assets/NOTICES": "77a9723bed71a6e3c2d0ffc3eba24848",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "132964ec25a56f5d1ab5cfe21abacb5a",
"assets/video/SmallRigOut.mp4": "5cdac505dc8fea9d6922cf4a08b01816",
"assets/video/LogDrop.mp4": "d7055d1255bb537212cef29ca62fb04b",
"assets/video/TopOut.mp4": "987baa562558479b9cdbe6b733b8a867",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "6918f538fad20ac05ed1412750523ca2",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"version.json": "3320c9fee45edf29895ca3c2a87ab303",
"main.dart.js": "6f0d1790278d885c9b1731bedbc80ea8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
