const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    // setInterval(() => {
    //   console.log("!!")
    //   res.write('Hello, world!\n');
    // }, 1000);
    console.log("!!");
    res.write("Hello, world!");
  })
  .listen(2080);
