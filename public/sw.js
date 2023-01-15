// console.warn("ws file is public folder");
let cacheData = "appV1";
this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/",
        "/users",
      ]);
    })
  );
});

this.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => {
      if (resp) {
        return resp;
      }
    })
  );
});
