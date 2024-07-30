const express = require('express');
const router = express.Router();
const path = require('path');

// 기본 경로 /gallery/ 하위에 매핑
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'gallery.html'));
});

// /gallery/subpath 경로에 대한 추가 경로
router.get('/subpath', (req, res) => {
  res.send('/gallery/subpath 요청에 대한 처리 결과');
});

module.exports = router;
