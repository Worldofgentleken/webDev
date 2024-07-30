const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const app = express();
const port = 3000;

// app.use(morgan('dev'));

// JSON 파싱을 위한 미들웨어
app.use(express.json());

// 기본 경로
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 경로 변수 사용 예제 - 사용자 정보 조회
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

// 쿼리 매개변수 사용 예제 - 검색
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`검색 query: ${query}`);
});

// POST 요청 예제 - 사용자 추가
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).send(`사용자 추가 성공: Name: ${name}, Email: ${email}`);
});

// 경로 변수와 POST 요청 결합 - 특정 사용자에 대한 작업 수행
app.post('/users/:userId/messages', (req, res) => {
  const userId = req.params.userId;
  const { message } = req.body;
  res.send(`${userId}의 메시지: ${message}`);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
