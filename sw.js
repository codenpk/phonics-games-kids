// Phonics Games for Kids — Service Worker
// Cache-first strategy: serve all static assets from cache; update in background.
// Bump CACHE_VERSION when files change to force clients to refresh.

const CACHE_VERSION = 'v7';
const CACHE_NAME = `phonics-games-${CACHE_VERSION}`;

const PRECACHE = [
  '/phonics-games-kids/launcher.html',
  '/phonics-games-kids/manifest.json',
  '/phonics-games-kids/icons/icon-192.png',
  '/phonics-games-kids/icons/icon-512.png',
  '/phonics-games-kids/icons/icon.svg',
  '/phonics-games-kids/games/phonics.html',
  '/phonics-games-kids/games/rhyme-rocket.html',
  '/phonics-games-kids/games/sight-word-flash.html',
  '/phonics-games-kids/games/syllable-tap.html',
  '/phonics-games-kids/games/spell-it.html',
  '/phonics-games-kids/games/first-sound.html',
  '/phonics-games-kids/games/odd-one-out.html',
  '/phonics-games-kids/data/phonics.js',
  '/phonics-games-kids/data/rhyme-rocket.js',
  '/phonics-games-kids/data/sight-words.js',
  '/phonics-games-kids/data/syllables.js',
  '/phonics-games-kids/data/spelling.js',
  '/phonics-games-kids/data/first-sound.js',
  '/phonics-games-kids/data/odd-one-out.js',
  '/phonics-games-kids/games/long-vowel-magic.html',
  '/phonics-games-kids/games/word-match.html',
  '/phonics-games-kids/games/blend-builder.html',
  '/phonics-games-kids/data/long-vowel.js',
  '/phonics-games-kids/data/word-match.js',
  '/phonics-games-kids/data/blend-builder.js',
  '/phonics-games-kids/games/vowel-volcano.html',
  '/phonics-games-kids/games/missing-vowel.html',
  '/phonics-games-kids/games/compound-crash.html',
  '/phonics-games-kids/games/word-sort.html',
  '/phonics-games-kids/data/vowel-volcano.js',
  '/phonics-games-kids/data/missing-vowel.js',
  '/phonics-games-kids/data/compound-words.js',
  '/phonics-games-kids/data/word-sort.js',
  '/phonics-games-kids/games/digraph-detective.html',
  '/phonics-games-kids/games/r-controlled.html',
  '/phonics-games-kids/games/contraction-action.html',
  '/phonics-games-kids/games/ending-sounds.html',
  '/phonics-games-kids/data/digraph-detective.js',
  '/phonics-games-kids/data/r-controlled.js',
  '/phonics-games-kids/data/contractions.js',
  '/phonics-games-kids/data/ending-sounds.js',
];

// ── Install: precache everything ─────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: delete old caches ───────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('phonics-games-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first, then network, then fallback ──────────────────────────
self.addEventListener('fetch', event => {
  // Only handle GET requests for our own origin
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // Serve from cache immediately; revalidate in background
        const revalidate = fetch(event.request).then(response => {
          if (response && response.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        }).catch(() => {});
        return cached;
      }

      // Not in cache: fetch from network and cache for next time
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});
