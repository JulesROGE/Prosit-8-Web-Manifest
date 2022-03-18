//Installation du service worker
self.addEventListener('install', evt => {
    evt.waitUntil( caches.open(NomDuCache).then(cache => {
    cache.addAll(assets);
    })
    )
    });
self.addEventListener('activate', evt => {
    console.log('le Service Worker a été installé ');
    });