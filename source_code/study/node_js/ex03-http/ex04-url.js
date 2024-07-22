const http = require("http");

const server = http.createServer((req, res) => {
  // 요청 URL과 HTTP 메서드 추출
  const { url, method } = req;

  // 요청 URL에 따른 응답 처리
  if (method === 'GET' && url === '/hello') {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  } else if (method === 'GET' && url === '/bye') {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Goodbye!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
