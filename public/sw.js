// The Workbox service worker this site used until December 2025 is no longer
// generated. Browsers that installed it still check this URL for updates, so
// this replacement clears its caches and removes it. Do not delete this file.
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
  )
})
