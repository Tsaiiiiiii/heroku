const http = require("http");
http.createServer(function(request, response) {
    console.log(request.url);
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(3000);
console.log("Server已開啟port: 3000.");

