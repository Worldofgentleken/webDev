const express = require('express');
const path = require('path');

const app = express();

// static 폴더 내의 정적 파일 제공
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex02.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
