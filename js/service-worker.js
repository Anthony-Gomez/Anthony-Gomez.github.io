self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('poker-whispers').then(function(cache) {
        return cache.addAll([
          '/',
          'css/style.css',
          'img/logo.png',
          'js/script.js'
        ]);
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