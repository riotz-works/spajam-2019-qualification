importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'), new workbox.strategies.CacheFirst ({"cacheableResponse":{"statuses":[0,200]}}), 'GET')
workbox.routing.registerRoute(new RegExp('.(?:png|gif|jpg|jpeg|svg)$'), new workbox.strategies.CacheFirst ({"cacheExpiration":{"maxEntries":60,"maxAgeSeconds":2592000}}), 'GET')
workbox.routing.registerRoute(new RegExp('/spajam-2019-qualification/static/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/spajam-2019-qualification/'), new workbox.strategies.NetworkFirst ({}), 'GET')