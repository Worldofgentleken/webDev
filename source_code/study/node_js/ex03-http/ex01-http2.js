const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log('클라이언트로부터 요청을 받음');
  console.log(req.method, req.url);

  // HTML 파일 경로
  const filePath = path.join(__dirname, 'public', 'index.html');

  // HTML 파일 읽기
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 존재하지 않음 (404 Not Found)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        // 서버 에러 (500 Internal Server Error)
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
      return;
    }

    // HTML 파일 응답
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
