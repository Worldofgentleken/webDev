const http = require("http");

const todos = [{ id: 1, task: "Learn Node.js" }];

const server = http.createServer((req, res) => {
  // 응답 상태 코드와 헤더 설정
  res.writeHead(200, { "Content-Type": "application/json", "My-Header": "MyHeaderValue" });

  // 주요 응답 데이터 출력
  console.log("Status Code:", res.statusCode);
  console.log("Headers:", res.getHeaders());
  
  // 클라이언트에게 응답
  res.end(JSON.stringify(todos));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
