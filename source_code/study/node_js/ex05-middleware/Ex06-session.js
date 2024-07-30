const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// 세션 설정
app.use(session({
  secret: 'secret-key', // 세션 암호화에 사용되는 키(일반적으로 쿠키 파서와 동일하게 설정)
  resave: false,      // 세션이 수정되지 않아도 항상 저장
  saveUninitialized: true, // 초기화되지 않은 세션도 저장
  cookie: { 
    httpOnly: true, // 브라우저에서 javascript로 접근 가능(false)/불가(true)
    secure: false // HTTPS가 아닌 환경에서도 사용할 수 있도록 설정
  } 
}));

app.get('/', (req, res) => {
  console.log('현재 요청한 브라우저의 세션 ID:', req.session.id);
  res.sendFile(path.join(__dirname, 'public', 'ex06.html'));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // 로그인 로직 (간단한 예제, 실제로는 DB와 연동해야 함)
  if (email === 'test@example.com' && password === 'password') {
    req.session.user = { email: email }; // 세션에 사용자 정보 저장
    res.redirect('/dashboard');
  } else {
    res.send('로그인 실패. 다시 시도하세요.');
  }
});

app.get('/dashboard', (req, res) => {
  if (req.session.user) { //세션 확인
    res.send(`<h1>Welcome, ${req.session.user.email}</h1> <a href="/logout">Logout</a>`);
  } else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(); // 세션 삭제
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
