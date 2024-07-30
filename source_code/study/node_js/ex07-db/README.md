MYSQL 연동 시 주요 함수

1. createConnection
  MySQL 서버와의 연결을 설정
  연결 설정을 위한 구성 옵션을 인자로 받음

    const mysql = require('mysql2');

    // MySQL 연결 설정
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',  // MySQL 비밀번호
      database: 'test_db'    // 사용할 데이터베이스 이름
    });


2. connect
  MySQL 서버에 실제로 연결
  연결이 성공하면 전달된 콜백 함수 호출

    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
      }
      console.log('Connected to MySQL');
    });


3. query
  SQL 쿼리를 실행
  SQL 쿼리 문자열과 콜백 함수를 인자로 받음
  콜백 함수는 쿼리가 완료되면 호출되며, 결과를 처리

  예시 1: 버전 정보 출력

  connection.query('SELECT VERSION() AS version', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('MySQL Version:', results[0].version);
  });

  예시 2: 데이터베이스 목록 출력

    connection.query('SHOW DATABASES', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }
      console.log('Databases:');
      results.forEach((row) => {
        console.log(row.Database);
      });
    });


4. end
  MySQL 서버와의 연결을 종료
  연결 종료가 완료되면 콜백 함수 호출

    connection.end((err) => {
      if (err) {
        console.error('Error ending the connection:', err);
        return;
      }
      console.log('Connection ended');
    });


5. execute
  준비된 문(Prepared Statement)을 실행
  준비된 문은 SQL 인젝션 공격을 방지하는 데 유용

  예시: 준비된 문을 사용한 데이터 삽입

    const sql = 'INSERT INTO students (student_name, birth, gender, intro) VALUES (?, ?, ?, ?)';
    const values = ['홍길동', '2000-05-10', '남', '안녕하세요, 홍길동입니다.'];

    connection.execute(sql, values, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }
      console.log('Inserted ID:', results.insertId);
    });


6. createPool
  연결 풀(Connection Pool)을 생성
  연결 풀은 여러 connection을 미리 열어 두어 성능을 향상 시킴

    풀 생성 예시
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'test_db',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    예시: 풀에서 연결 가져오기
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting connection from pool:', err);
        return;
      }

      connection.query('SELECT VERSION() AS version', (err, results) => {
        connection.release();  // 연결 반환

        if (err) {
          console.error('Error executing query:', err);
          return;
        }
        console.log('MySQL Version:', results[0].version);
      });
    });


예시에 사용된 테이블
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    birth DATE,
    gender ENUM('남', '여') NOT NULL
);
