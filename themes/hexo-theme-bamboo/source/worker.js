self.addEventListener('install', (e) => {
    console.log('install',e)
});

self.addEventListener('fetch', (e) => {
  console.log('fetch',e.request.url);
});