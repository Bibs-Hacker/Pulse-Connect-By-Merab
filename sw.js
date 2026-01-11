self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('twinnie-chat-v1').then(cache => {
      return cache.addAll([
        './',
        'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js',
        'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js',
        'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
