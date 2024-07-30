MYSQL 8.x 필요

root/1234
데이터베이스 mydb

사용 테이블
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    birth DATE,
    gender ENUM('남', '여') NOT NULL,
    intro TEXT
);
위 내용이 준비되면 아래 4번으로 서비스 실행
웹 브라우저에서 localhost:3000 요청하여 동작 테스트 가능

프로젝트를 새로 만들 경우 다음 참조해서 생성
1. package.json 
PS C:\work\nodework\examples\ex08-project_mvc_react> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (ex08-project_mvc_react)
version: (1.0.0)
description: mvc project
entry point: (index.js)
test command:
keywords:
author: ruru
license: (ISC)
About to write to C:\work\nodework\examples\ex08-project_mvc_react\package.json:

{
  "name": "ex08-project_mvc_react",
  "version": "1.0.0",
  "description": "mvc project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "ruru",
  "license": "ISC"
}


Is this OK? (yes)

2. 모듈 설치
PS C:\work\nodework\examples\ex08-project_mvc_react> npm install express body-parser mysql2 nodemon morgan

3. package.json 수정
...
"scripts": {
    "start": "node app.js"
  },
...

4. npm start