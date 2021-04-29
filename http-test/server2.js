const http = require("http");

http.createServer((req, res)=>{
    console.log("request come", req.url);
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        'Access-Control-Allow-Methods': 'POST, PUT, DELETE',
        'Access-Control-Max-Age': 1000
    });

    res.end('123');
}).listen(8887);

console.log("listening on port 8887");