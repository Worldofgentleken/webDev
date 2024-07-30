const express = require('express');
const router = express.Router();

// 경로 변수 사용 예제 - 사용자 정보 조회
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`사용자 ID: ${userId}`);
});

// POST 요청 예제 - 사용자 추가
router.post('/', (req, res) => {
  const { name, email } = req.body;
  res.status(201).send(`사용자 추가 완료: Name: ${name}, Email: ${email}`);
});

// 경로 변수와 POST 요청 결합 - 특정 사용자에 대한 작업 수행
router.post('/:userId/messages', (req, res) => {
  const userId = req.params.userId;
  const { message } = req.body;
  res.send(`${userId}사용자에게 보낸 메시지: ${message}`);
});

module.exports = router;
