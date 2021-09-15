'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "fbcc622757823d4b31a936e169fc6b5d",
"manifest.json": "010f129b3b174dde9a468793a6ccb6c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "c69c3be917207a0365482680064f9773",
"assets/AssetManifest.json": "cc574b27a8249c0e6cc4a53bb6cb7734",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/d10.jpg": "4dd40008d13f34bb3e1a21dc40fa28cf",
"assets/images/d2thumb.jpg": "7ab3418b540ab19e2de1b7d17ff39d2d",
"assets/images/pic7thumb.jpg": "9c790a944bccac07a1a8e4a49aab01d2",
"assets/images/d8.jpg": "07870358f391455886acee7df268dfe9",
"assets/images/d2.jpg": "a336bfc57987e798368ffa4a1889541f",
"assets/images/pic1-1thumb.jpg": "4179c574268e7e56db9b1cb0e39b0469",
"assets/images/d7.jpg": "957753cdd563e6efa6cc30d679f24997",
"assets/images/pic1-1.jpg": "093a104d892240cbf97e1d2dca53c17f",
"assets/images/p1.jpg": "5e1a7249ea3dbb6dc14ec1c92580ec29",
"assets/images/p4.jpg": "8c67202dfe60777f8705ae514e963acc",
"assets/images/d5thumb.jpg": "40c36c6fbc615e959eb872a785d933b5",
"assets/images/zero_ashes.mp4": "f80eedc23e34cf8644afeb30a2714a0e",
"assets/images/pic4thumb.jpg": "a3a1212ab193523eadd944310b29a946",
"assets/images/d6thumb.jpg": "7118a39bc7091b878dfb3d61191e389d",
"assets/images/d9.jpg": "46db74386f6ba257a6c18ec47b4c3d14",
"assets/images/pic11.jpg": "99f6aac01388f183244a54c3e30cc63c",
"assets/images/d4.jpg": "2173a47d96964e7343b618cd633529b9",
"assets/images/d1.jpg": "6b4762c8f4839becf7e53dff5289c10b",
"assets/images/p5thumb.jpg": "62c45df29e7fc9236fb71e414b5005e0",
"assets/images/d1thumb.jpg": "b14065d936a0e220a8f44827afac3b31",
"assets/images/p3thumb.jpg": "7e5c8136b28e0cab8ea12d9568a95b11",
"assets/images/p2thumb.jpg": "1cc844abe2eba10d268742e2a47db14f",
"assets/images/d10thumb.jpg": "ceefcb1d26bd8d011f74a0114844d13d",
"assets/images/pic7.jpg": "7a1e5eade36e6a3a85cb5c91b89c4103",
"assets/images/p1thumb.jpg": "0679cac8dce4825fa77a5a11bdc1a689",
"assets/images/tob.mp4": "e71a77808313697ea2e77f589fea0ddf",
"assets/images/p2.jpg": "cbaad084b6403808bac36f229a0ccf9f",
"assets/images/d9thumb.jpg": "7d21221a877b7108558a60f4fde5476d",
"assets/images/pic5.jpg": "4e7c6191e605efaf1a96721b91593686",
"assets/images/pic10thumb.jpg": "93645b086c6115823f604ff7bed8127b",
"assets/images/d7thumb.jpg": "47f4f6e54e8c59019b78457a859acd5a",
"assets/images/pic9thumb.jpg": "4018139ca9fe6a628b4c734dd35d0664",
"assets/images/d4thumb.jpg": "d76c9d99f500f09fa55de739c36bc6e3",
"assets/images/p4thumb.jpg": "b92e6992e6461380d9d69ca9fd99cda6",
"assets/images/pic8.jpg": "ff551b2d99caf92a928404bc3d6bc3c3",
"assets/images/pic3-1.jpg": "168278758f953b19148ea751700301f6",
"assets/images/pic4.jpg": "649e93d3640d4d016b64b83ee831dcfb",
"assets/images/pic3-1thumb.jpg": "95044896f1705b7762ad977874b5d5b4",
"assets/images/pic9.jpg": "6a21a59600e554ce58050b24ea260b1c",
"assets/images/pic10.jpg": "dc0a0e2a0908a2352e75319924547953",
"assets/images/pic5thumb.jpg": "adaf0e01ae4c216d29aebf63968ad6ab",
"assets/images/pic8thumb.jpg": "917632ae2657632eb69e8fbc7d8c73c3",
"assets/images/p3.jpg": "fa7cbbe4ee9cab6063cc037ab711967f",
"assets/images/d8thumb.jpg": "aafe36c012423f85aa1c21eae561a89c",
"assets/images/d5.jpg": "a572476e8edfc8b4ac4d258d5001f7d4",
"assets/images/pic12.jpg": "b114972462e9780f526a8401a2162362",
"assets/images/d6.jpg": "c972cda669addea2a5ca4eb0f70b3443",
"assets/images/pic2-1.jpg": "ce0ef0c437d823843e8ebf877e090a6f",
"assets/images/p5.jpg": "3e691ac1b2c86c18bbd7d74eb4291c44",
"assets/images/pic12thumb.jpg": "be8e4da8290fbd2d1bcd49d3e1846bb2",
"assets/images/pic2-1thumb.jpg": "8e331556f48a0cb4ecd4ee32ec76b9cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "9d1ba5738e318bd68003edd1e5c5b960",
"/": "9d1ba5738e318bd68003edd1e5c5b960",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "d5cc9aaf2d5d6f45f5d4b1f91a3e74a3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
