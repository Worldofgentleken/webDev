const express = require('express');
const router = express.Router();

// 쿼리 매개변수 사용 예제 - 검색
router.get('/', (req, res) => {
  const query = req.query.q;
  res.send(`검색 쿼리: ${query}`);
});

module.exports = router;
