const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  //date클래스를 불러옴
  const now = new Date();

  //
  const timeString = now.toLocaleTimeString();

  //
  res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Real-time Clock</title>
        <style>
          h1 {
            background-color: aqua;
          }
        </style>
      </head>
      <body>
        <h1>Real-time Clock</h1>
        <p>The current time is: <span id="clock">${timeString}</span></p>
        <script>
          // 
          setInterval(() => {
            // 
            const now = new Date();

            //
            const timeString = now.toLocaleTimeString();

            //
            document.getElementById('clock').textContent = timeString;
          }, 1000);
        </script>
      </body>
    </html>
  `);

  //
  res.end();
});

server.listen(3050, () => {
  console.log("Server running on port 3050");
});
