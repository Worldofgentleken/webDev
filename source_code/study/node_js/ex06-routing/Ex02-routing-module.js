const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));

// JSON 파싱을 위한 미들웨어
app.use(express.json());

// 라우터 파일을 가져오기
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');
const galleryRouter = require('./routes/gallery');
const freeboardRouter = require('./routes/freeboard');

// 기본 경로와 사용자 경로에 대해 라우터 사용
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/gallery', galleryRouter);
app.use('/freeboard', freeboardRouter);

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
