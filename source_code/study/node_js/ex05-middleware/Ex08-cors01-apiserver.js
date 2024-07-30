const express = require('express');
const cors = require('cors');

const app = express();

// CORS 미들웨어 설정
app.use(cors({
  //origin: false //모든 출처 요청 불가 설정
  origin: 'http://localhost:3001' // 특정 출처 허용(여러 개 일경우  배열로 등록)
}));

/*
여러 출처 허용 설정 시 함수를 사용하면 세밀한 조건을 적용할 수 있음
const allowedOrigins = ['http://localhost:3001', 'http://localhost:3002'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
*/

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from the API server!' });
});

app.listen(4000, () => {
  console.log('API Server is running on port 4000');
});
