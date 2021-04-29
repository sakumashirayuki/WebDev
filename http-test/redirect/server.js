const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
    console.log("request come", req.url);

    if(req.url==='/'){
        res.writeHead(301, {
            'Location': '/new' 
        });
        res.end('');
    }

    if(req.url==='/new'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<div>This is the content</div>');
    }

}).listen(8888);

console.log("listening on port 8888");