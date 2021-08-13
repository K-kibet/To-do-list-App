self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return caches.addAll(["./","./src/style.css","./icons/apple-splash-640-1136.png"])
        })
    )
});

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})

