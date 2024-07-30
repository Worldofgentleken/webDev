const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const path = require('path');

// Express 앱 생성
const app = express();
const port = 3000;

// 정적 파일 서빙 설정
app.use(express.static(path.join(__dirname, 'public')));

// `ex04.html` 파일 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex04.html'));
});

// Body-parser 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL 커넥션 풀 설정
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mydb'
});

// 정적 파일 서빙 설정
app.use(express.static(path.join(__dirname, 'public')));

// 특정 학생 정보 조회 API
app.get('/students/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM students WHERE student_id = ?', [id]);
    connection.release();

    if (rows.length === 0) {
      return res.status(404).send('Student not found');
    }

    res.json(rows[0]);
  } catch (err) {
    console.error('쿼리 실행 에러:', err);
    res.status(500).send('Server error');
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
