const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
    console.log("request come", req.url);

    if(req.url==='/'){
        const html = fs.readFileSync('test.html', 'utf8');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(html);
    }

    if(req.url==='/script.js'){
        const etag = req.headers['if-none-match'];
        if(etag==='777'){
            res.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=2000000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            });
            res.end('');
        }else{
            res.writeHead(200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=2000000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            });
            res.end('console.log("script loaded")');
        }
    }

}).listen(8888);

console.log("listening on port 8888");