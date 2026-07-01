// Minimal service worker — hanya untuk syarat installability PWA
const CACHE_NAME = 'wife-aurora-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

// Pass-through fetch (tidak memaksa offline cache agar tidak mengganggu Firebase/Cloudinary)
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
