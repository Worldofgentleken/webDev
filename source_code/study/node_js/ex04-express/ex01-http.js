const express = require("express");

const app = express();

app.get("*", (req, res) => {
    console.log('클라이언트로부터 요청 받음');
    console.log(req.method, req.url);
    res.send("<h1>It works!</h1>");
});

app.listen(3000, () => {
    console.log("서버 실행 됨");
})