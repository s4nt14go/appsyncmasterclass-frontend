workbox.core.setCacheNameDetails({ prefix: "appsyncmasterclass-frontend" });

workbox.core.skipWaiting()
workbox.core.clientsClaim()

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})