const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const host = '127.0.0.1';
const port = 5501;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8'};

http.createServer((request, response) => {
  const pathname = new URL(request.url, `http://${host}:${port}`).pathname;
  const relative = pathname === '/' ? '/index.html' : decodeURIComponent(pathname);
  const file = path.resolve(root, `.${relative}`);
  if (!file.startsWith(root)) { response.writeHead(403).end('Forbidden'); return; }
  fs.readFile(file, (error, content) => {
    if (error) { response.writeHead(404).end('Not found'); return; }
    response.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store'});
    response.end(content);
  });
}).listen(port, host, () => console.log(`Preview: http://${host}:${port}/`));
