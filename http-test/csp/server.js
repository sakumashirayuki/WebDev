const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
    console.log("request come", req.url);
    if(req.url==='/'){
        const html = fs.readFileSync('test.html', 'utf8');
        res.writeHead(200, {
            'Content-Type': 'text/html',
            //'Content-Security-Policy': 'default-src \'self\'; form-action \'self\'; report-uri /report'
        });
        res.end(html);
    }
    if(req.url==='/test.js'){
        res.writeHead(200, {
            'Content-Type': 'application/javascript',
        });
        res.end('console.log("script loaded")');
    }

}).listen(8888);

console.log("listening on port 8888");