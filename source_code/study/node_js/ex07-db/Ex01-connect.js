//npm install express node body-parser

const mysql = require('mysql2');

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rjsgml02@'  // MySQL 비밀번호를 입력하세요
});

// 연결
connection.connect((err) => {
  if (err) {
    console.error('MySQL 접속 에러:', err);
    return;
  }
  console.log('MySQL 접속 성공');

  // MySQL 버전 정보 출력
  connection.query('SELECT VERSION() AS version', (err, results) => {
    if (err) {
      console.error('query 실행 에러:', err);
      return;
    }
    console.log('MySQL Version:', results[0].version);
  });

  // 데이터베이스 목록 출력
  connection.query('SHOW DATABASES', (err, results) => {
    if (err) {
      console.error('query 실행 에러:', err);
      return;
    }
    console.log('Databases:');
    results.forEach((row) => {
      console.log(`\t${row.Database}`);
    });

    // 연결 종료
    connection.end((err) => {
      if (err) {
        console.error('connection 종료 에러:', err);
        return;
      }
      console.log('Connection 종료');
    });
  });
});
