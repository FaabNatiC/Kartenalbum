// Offline-Fähigkeit: App-Dateien und bereits angesehene Kartenbilder werden auf dem Gerät zwischengespeichert.
const APP = "kartenalbum-v34";
const IMG = "kartenbilder-v1";
const MAXIMG = 3000;
let trimT = 0;
function trim(){ clearTimeout(trimT); trimT = setTimeout(async () => { try { const c = await caches.open(IMG), ks = await c.keys(); for (let i = 0; i < ks.length - MAXIMG; i++) await c.delete(ks[i]); } catch {} }, 4000); }
const FILES = ["./", "index.html", "data.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(APP).then(c => c.addAll(FILES.map(f => new Request(f, {cache: "reload"}))))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== APP && k !== IMG).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  const IMGHOST = url.hostname === "assets.tcgdex.net" || url.hostname === "images.pokemontcg.io" || (url.hostname === "raw.githubusercontent.com" && url.pathname.startsWith("/PokeAPI/sprites/"));
  if (IMGHOST) {
    e.respondWith(caches.open(IMG).then(async c => {
      const hit = await c.match(e.request.url);
      if (hit) return hit;
      let res;
      try { res = await fetch(e.request.url, {mode: "cors", credentials: "omit"}); } catch { res = null; }
      if (!res || (!res.ok && res.type !== "opaque")) res = await fetch(e.request);
      if (res.ok || res.type === "opaque") { c.put(e.request.url, res.clone()).then(trim).catch(() => {}); }
      return res;
    }));
    return;
  }
  if (url.origin === location.origin) {
    // Netzwerk zuerst, damit Updates ankommen; offline aus dem Cache
    // immer beim Server nachfragen (ETag), damit neue Versionen sofort ankommen; offline aus dem Cache
    e.respondWith(fetch(e.request.url, {cache: "no-cache", credentials: "same-origin"}).then(res => { if (res.ok) { const copy = res.clone(); caches.open(APP).then(c => c.put(url.search ? url.origin + url.pathname : e.request, copy)); } return res; }).catch(() => caches.match(e.request, {ignoreSearch: true})));
  }
});
