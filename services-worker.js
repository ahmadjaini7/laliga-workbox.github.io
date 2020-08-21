importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
    console.log('Workbox berhasil dimuat');
else
    console.log('Workbox gagal dimuat');

workbox.precaching.precacheAndRoute([
    { url: '/laliga-workbox.github.io/', revision: '1' },
    { url: '/laliga-workbox.github.io/index.html', revision: '1' },
    { url: '/laliga-workbox.github.io/navbar.html', revision: '1' },
    { url: '/laliga-workbox.github.io/manifest.json', revision: '1' },
    { url: '/laliga-workbox.github.io/team.html', revision: '1' },
    { url: '/laliga-workbox.github.io/swcon.js', revision: '1' },
    { url: '/laliga-workbox.github.io/css/materialize.min.css', revision: '1' },
    { url: '/laliga-workbox.github.io/css/style.css', revision: '1' },
    { url: '/laliga-workbox.github.io/css/font.woff2', revision: '1' },
    { url: '/laliga-workbox.github.io/image/laliga.png', revision: '1' },
    { url: '/laliga-workbox.github.io/image/icons/icon-72.png', revision: '1' },
    { url: '/laliga-workbox.github.io/image/icons/icon-96m.png', revision: '1' },
    { url: '/laliga-workbox.github.io/image/icons/icon-128m.png', revision: '1' },
    { url: '/laliga-workbox.github.io/image/icons/icon-144m.png', revision: '1' },
    { url: '/laliga-workbox.github.io/image/icons/icon-152m.png', revision: '1' },
    { url: '/laliga-workbox.github.io/image/icons/icon-192m.png', revision: '1' },
    { url: '/laliga-workbox.github.io/image/icons/icon-512m.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/materialize.min.js', revision: '1' },
    { url: '/laliga-workbox.github.io/js/navbar.js', revision: '1' },
    { url: '/laliga-workbox.github.io/js/api.js', revision: '1' },
    { url: '/laliga-workbox.github.io/js/db.js', revision: '1' },
    { url: '/laliga-workbox.github.io/js/idb.js', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/77.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/78.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/79.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/80.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/81.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/82.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/83.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/86.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/88.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/89.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/90.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/92.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/94.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/95.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/250.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/263.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/278.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/558.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/559.png', revision: '1' },
    { url: '/laliga-workbox.github.io/js/logo/745.png', revision: '1' },
    { url: '/laliga-workbox.github.io/pages/home.html', revision: '1' },
    { url: '/laliga-workbox.github.io/pages/saved.html', revision: '1' },
    { url: '/laliga-workbox.github.io/pages/teams.html', revision: '1' },
], { ignoreUrlParametersMatching: [/.*/] });

// api cache
workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'api-data'
    })
);

// web push
self.addEventListener('push', function (event) {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    const options = {
        body: body,
        icon: 'image/icons/Icon-512.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});