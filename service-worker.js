// ملف Service Worker لدعم العمل في وضع Offline

const CACHE_NAME = 'task-manager-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/tasks.html',
    '/add-task.html',
    '/reports.html',
    '/admin.html',
    '/settings.html',
    '/css/style.css',
    '/js/app.js',
    '/js/drag-drop.js',
    '/js/charts.js',
    '/assets/logo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
              .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
              .then(response => response || fetch(event.request))
    );
});

