const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// morgan 미들웨어 설정 (요청 로깅)
app.use(morgan('dev'));
/*
사전 정의된 로깅 형식
  combined: Apache combined 로그 형식.
  common: Apache common 로그 형식.
  dev: 개발 환경에 적합한 로그 형식, 간결하고 색상이 추가됨.
  short: 간결한 로그 형식.
  tiny: 매우 간결한 로그 형식.
*/

// 정적 파일 제공 설정 (정적 파일 제공)
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex02.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
