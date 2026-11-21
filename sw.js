/* OkToChat service worker (website only, never the Android app).
   Online it always fetches fresh files, so updates show up right away.
   Offline it falls back to the last copy it saw, or a small "you are offline" page.
   It only touches OkToChat's own files: Firebase, OkAI and other servers pass straight through. */
const CACHE = 'oktochat-v1';
const CORE = ['./', 'offline.html', 'icon-any-192.png', 'icon-any-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname.includes('/dl/')) return; // console downloads are big, never cache them
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); }
      return res;
    } catch (err) {
      const hit = await caches.match(req, { ignoreSearch: req.mode === 'navigate' });
      if (hit) return hit;
      if (req.mode === 'navigate') return (await caches.match('./')) || caches.match('offline.html');
      throw err;
    }
  })());
});
