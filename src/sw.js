const versao = 1;
const cacheName = 'poupaGrana_cache_v';

// arquivos a ser salvo no cache
const resourceToPrecache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/main.js',
    '/main.bundle.js',
    '/vendors.bundle.js'
];

// escuta instalação sw apos instalado salva cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName + versao)
            .then(cache => (
                cache.addAll(resourceToPrecache)
                    .then(() => cache.delete(cacheName + (versao - 1)))
            )),
    );
});

// escuta refrech pagina e retorna dados do cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(cacheResponse => (cacheResponse || fetch(event.request)))
    )
});

// escuta messages
self.addEventListener('message', function(e) {
    if (e.data.updateSw){ //nova version sistema faz refrech da aplicação
        self.skipWaiting();
    }
});