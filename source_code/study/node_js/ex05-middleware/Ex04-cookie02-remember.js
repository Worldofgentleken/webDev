const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex04.html'));
});

app.post('/login', (req, res) => {
  const { email, password, remember } = req.body;

  // 로그인 로직 (간단한 예제, 실제로는 DB와 연동해야 함)
  if (email === 'test@example.com' && password === 'password') {
    if (remember) {
      res.cookie('remember', email, { maxAge: 30 * 24 * 60 * 60 * 1000 });
    } else {
      res.clearCookie('remember');
    }
    res.send('로그인 성공!');
  } else {
    res.send('로그인 실패. 다시 시도하세요.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
