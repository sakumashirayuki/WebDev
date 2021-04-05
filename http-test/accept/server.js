const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

http.createServer((req, res)=>{
    console.log("request come", req.url);

    const html = fs.readFileSync('test.html');
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Encoding': 'gzip'
    });
    res.end(zlib.gzipSync(html));
}).listen(8888);

console.log("listening on port 8888");