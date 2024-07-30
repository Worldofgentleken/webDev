const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build'))); // React 빌드 파일 서빙

// 계산 기록을 저장할 파일 경로
const calcHistoryFile = path.join(__dirname, 'calcHistory.json');

// 계산 결과 저장 함수
const saveCalcResult = (expression, result) => {
  const newRecord = { expression, result };
  let calcHistory = [];

  if (fs.existsSync(calcHistoryFile)) {
    const data = fs.readFileSync(calcHistoryFile);
    calcHistory = JSON.parse(data);
  }

  calcHistory.push(newRecord);
  fs.writeFileSync(calcHistoryFile, JSON.stringify(calcHistory));
};

// POST /calculate 엔드포인트
app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  let result;

  try {
    result = eval(expression);
    saveCalcResult(expression, result);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

// GET /calculate 엔드포인트
app.get('/calculate', (req, res) => {
  if (fs.existsSync(calcHistoryFile)) {
    const data = fs.readFileSync(calcHistoryFile);
    res.json(JSON.parse(data));
  } else {
    res.json([]);
  }
});

// 모든 경로에 대해 React 애플리케이션의 index.html 파일 응답
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
