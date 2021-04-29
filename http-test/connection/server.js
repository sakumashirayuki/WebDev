const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
    console.log("request come", req.url);

    const html = fs.readFileSync('test.html', 'utf8');
    const img = fs.readFileSync('test.jpg');

    if(req.url==='/'){ // response html
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Connection': 'close'
        });
        res.end(html);
    }else{ // response jpg
        res.writeHead(200, {
            'Content-Type': 'img/jpg',
            'Connection': 'close'
        });
        res.end(img);
    }

}).listen(8888);

console.log("listening on port 8888");