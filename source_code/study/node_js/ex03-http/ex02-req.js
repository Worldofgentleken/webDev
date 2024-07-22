const http = require('http');
const { URL } = require('url');
const fs = require('fs');
const path = require('path');

const todos = [{ id: 1, task: 'Learn Node.js' }];

const server = http.createServer((req, res) => {
  console.log('클라이언트로부터 요청을 받음');
  if (req.url === '/') {
    // HTML 파일 경로
    const filePath = path.join(__dirname, 'public', 'ex02-req.html');

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
      console.log('HTML 파일 응답');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    // 요청 메서드 (GET, POST 등)
    const method = req.method;
    console.log(`Method: ${method}`);

    // 요청 URL
    const url = req.url;
    console.log(`URL: ${url}`);

    // 요청 헤더
    const headers = req.headers;
    console.log('Headers:', headers);

    // 요청 URL 및 쿼리 파싱
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const queryParams = Object.fromEntries(parsedUrl.searchParams);

    console.log(`Method: ${req.method}`);
    console.log(`URL: ${parsedUrl.pathname}`);
    console.log('Query Params:', queryParams);

    // 요청 바디 (POST, PUT 요청 등에서)
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      if (body) {
        console.log('Body:', body);
      }

      // 클라이언트에게 응답
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(todos));
    });
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
