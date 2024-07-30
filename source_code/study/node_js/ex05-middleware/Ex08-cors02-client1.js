const express = require('express');
const path = require('path');

const app = express();

// 정적 파일 제공 설정 (정적 파일 제공)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex08-1.html'));
});

app.listen(3001, () => {
  console.log('Client Server is running on port 3001');
});
