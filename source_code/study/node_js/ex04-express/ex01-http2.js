const express = require("express");
const path = require("path");
const app = express();

const index = path.join(__dirname, 'public', 'index.html');

app.get("*", (req, res) => {
  console.log('클라이언트로부터 요청 받음');
  console.log(req.method, req.url);
  res.sendFile(index);
});

app.listen(3000, () => {
  console.log('서버 실행 됨');
})