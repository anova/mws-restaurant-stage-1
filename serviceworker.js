const cache_name = 'restaurant-v11';

self.addEventListener('install', function(event) {
  console.log(`service worker: ${cache_name}`);
  event.waitUntil(
    caches.open(cache_name).then((cache) => {
      return cache.addAll([
        './',
        './restaurant.html',
        './css/styles.css',
        './js/dbhelper.js',
        './js/restaurant_info.js',
        './js/main.js',
        './data/restaurants.json'
      ]);
    })
  );//waitUntil
});//install event

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-') &&
                 cacheName != cache_name;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});