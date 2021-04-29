const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
    console.log("request come", req.url);

    if(req.url==='/'){
        const html = fs.readFileSync('test.html', 'utf8');
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['id=123; max-age=10', 'abc=456; HttpOnly']
        });
        res.end(html);
    }
}).listen(8888);

console.log("listening on port 8888");