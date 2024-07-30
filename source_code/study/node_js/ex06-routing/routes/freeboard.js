const express = require('express');
const router = express.Router();
const path = require('path');

// 기본 경로 /freeboard/
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'freeboard.html'));
});

// /freeboard/subpath 경로에 대한 추가 경로
router.get('/subpath', (req, res) => {
  res.send('/freeboard/subpath 요청에 대한 처리 결과');
});

module.exports = router;
