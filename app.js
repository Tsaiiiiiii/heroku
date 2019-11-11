//let a = 1;
//無限次執行，除非使用者進行中斷
//setInterval(function() { console.log("hello"+(a++));}, 1000);

const http = require("http");

//  node.js 載入模組
http.createServer(function(request, response) {
  console.log(request.url);
  // 路由
  if(request.url == '/'){
    // 資料庫
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>index</h1>");
    response.end();
  }else if(request.url == '/search'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>search</h1>");
    response.end();
  }else if(request.url == '/product'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>product</h1>");
    response.end();
  }else if(request.url == '/cart'){
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>cart</h1>");
    response.end();
  }else{
    console.log("888");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>88888</h1>");
    response.end();
  }
  
}).listen(process.env.PORT ||3000);
console.log("Server已開啟port: 3000.");

