const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser('secret-key'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex03.html'));
});

app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'Doraemon', { maxAge: 60*1000, httpOnly: true, signed: true});
  res.cookie('cookie', 'session-cookie', { httpOnly: true });
  res.send('응답에 쿠키 포함됨');
});

app.get('/get-cookie', (req, res) => {
  const username = req.signedCookies.username;
  const cookie = req.cookies.cookie;
  console.log('영구 쿠키:', username);
  console.log('세션 쿠키:', cookie);
  res.send(`요청에 포함된 쿠키: ${username}`);
});

app.get('/delete-cookie', (req, res) => {
  res.clearCookie('username');
  res.send('쿠키가 삭제되었습니다');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
