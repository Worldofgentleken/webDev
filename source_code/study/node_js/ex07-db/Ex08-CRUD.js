const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const path = require('path');

// Express 앱 생성
const app = express();
const port = 3000;

// 정적 파일 서빙 설정
app.use(express.static(path.join(__dirname, 'public')));

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

// `ex08.html` 파일 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex08.html'));
});

// 학생 정보 등록 API
app.post('/students', async (req, res) => {
  const { student_name, birth, gender, intro } = req.body;

  try {
    const connection = await pool.getConnection();
    const query = 'INSERT INTO students (student_name, birth, gender, intro) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [student_name, birth, gender, intro]);

    connection.release();

    res.json({ id: result.insertId });
  } catch (err) {
    console.error('쿼리 실행 에러:', err);
    res.status(500).send('서버 에러');
  }
});

// 학생 정보 조회 API
app.get('/students/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM students WHERE student_id = ?', [id]);
    connection.release();

    if (rows.length === 0) {
      return res.status(404).send('학생 정보를 찾을 수 없음');
    }

    res.json(rows[0]);
  } catch (err) {
    console.error('쿼리 실행 에러:', err);
    res.status(500).send('서버 에러');
  }
});

// 전체 학생 정보 조회 API
app.get('/students', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM students');
    connection.release();

    res.json(rows);
  } catch (err) {
    console.error('쿼리 실행 에러:', err);
    res.status(500).send('서버 에러');
  }
});

// 학생 정보 수정 API
app.put('/students/:id', async (req, res) => {
  const { id } = req.params;
  const { student_name, birth, gender, intro } = req.body;

  try {
    const connection = await pool.getConnection();
    const query = 'UPDATE students SET student_name = ?, birth = ?, gender = ?, intro = ? WHERE student_id = ?';
    const [result] = await connection.execute(query, [student_name, birth, gender, intro, id]);

    connection.release();

    if (result.affectedRows === 0) {
      return res.status(404).send('학생 정보를 찾을 수 없음');
    }

    res.send('학생 정보 수정 성공');
  } catch (err) {
    console.error('쿼리 실행 에러:', err);
    res.status(500).send('서버 에러');
  }
});

// 학생 정보 삭제 API
app.delete('/students/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await pool.getConnection();
    const query = 'DELETE FROM students WHERE student_id = ?';
    const [result] = await connection.execute(query, [id]);

    connection.release();

    if (result.affectedRows === 0) {
      return res.status(404).send('학생 정보를 찾을 수 없음');
    }

    res.send('학생 정보 삭제 성공');
  } catch (err) {
    console.error('쿼리 실행 에러:', err);
    res.status(500).send('서버 에러');
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
