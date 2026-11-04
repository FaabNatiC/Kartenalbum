// Offline-Fähigkeit: App-Dateien und bereits angesehene Kartenbilder werden auf dem Gerät zwischengespeichert.
const APP = "kartenalbum-v22";
const IMG = "kartenbilder-v1";
const FILES = ["./", "index.html", "data.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(APP).then(c => c.addAll(FILES.map(f => new Request(f, {cache: "reload"}))))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== APP && k !== IMG).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.hostname === "assets.tcgdex.net") {
    e.respondWith(caches.open(IMG).then(async c => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      const res = await fetch(e.request);
      if (res.ok) c.put(e.request, res.clone());
      return res;
    }));
    return;
  }
  if (url.origin === location.origin) {
    // Netzwerk zuerst, damit Updates ankommen; offline aus dem Cache
    // immer beim Server nachfragen (ETag), damit neue Versionen sofort ankommen; offline aus dem Cache
    e.respondWith(fetch(e.request.url, {cache: "no-cache", credentials: "same-origin"}).then(res => { if (res.ok && !url.search) { const copy = res.clone(); caches.open(APP).then(c => c.put(e.request, copy)); } return res; }).catch(() => caches.match(e.request, {ignoreSearch: true})));
  }
});
