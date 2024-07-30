// npm install express body-parser

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex01.html'));
});

app.post('/data', (req, res) => {
  console.log(req.body); // 요청 본문이 파싱되어 req.body에 저장
  res.send('서버에서 데이터 받음');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
