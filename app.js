/**
 * 1. 웹 브라우저에서 시간정보가 렌더링 되는 애플리케이션이 주요 사안이다.
 * 2. ‘시계’라고 칭한 의뢰주의 의도는 연,월,일,시,분,초, 요일 정보까지 볼 수 있는 기능이 탑재 되어야 한다. (예 : 2023-4-7 오전 10시 40분 30초 금요일)
 * 3. 심플한 것을 요구하였기 때문에, 화면 정 가운데에 시간정보가 배치되는 것으로
 *    디자인을 일단락하기로 했다.
 * 4. 가상의 동료가 접속량을 체크하는 모듈을 추가할 것이기 때문에, 정적페이지제작이 제한되고 서버사이드 렌더링(server-side rendering)방식을 요구한다.
 * 5. 모듈 사용 시, package.JSON 파일의 ‘초기화(initialize)’가 필요하다.
 * 6. 1초당 정보가 갱신되도록 조정하여 사용자(의뢰주)에게 ‘실시간’ 형태로
 *    사용자경험을 유도한다.
 * 7. 메인 서버 구동파일이름은 app.js로 설정할 것
 * 8. 포트번호는 3050으로 진행할 것
 */

const { timeStamp } = require("console");
const http = require("http");
const timers = require("timers");
const fs = require("fs");
const path = require("path");
function htmlFormat(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
  <body>
  <h1>${data}</h1>
  </body>
  </html>
  `;
}
const bodyTestData = `
<h1>안녕하세요</h1>
`;
function timestamp() {
  const watch = new Date();
  let livedHours = watch.getHours(watch.getTime());
  let livedMinutes = watch.getMinutes(watch.getTime());
  let livedSecond = watch.getSeconds(watch.getTime());

  return livedHours + ":" + livedMinutes + ":" + livedSecond;
}
console.log(timestamp());
function intervalFunc() {
  const watch = new Date();
  let livedHours = watch.getHours();
  let livedMinutes = watch.getMinutes();
  let livedSecond = watch.getSeconds();

  return console.log(livedHours + ":" + livedMinutes + ":" + livedSecond);
}

const appServer = http
  .createServer((req, res) => {
    fs.readFile("./index.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(3050, (err) => {
    if (err) {
      console.log("에러 발생");
    } else {
      console.log("서버가 구동됨");
    }
  });
