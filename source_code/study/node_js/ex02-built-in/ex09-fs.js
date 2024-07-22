/*
fs 모듈
  파일 시스템과 상호 작용할 수 있는 메서드를 제공하는 모듈

주요 메서드:
  fs.readFile(): 파일 읽기.
  fs.writeFile(): 파일 쓰기.
  fs.appendFile(): 파일에 데이터 추가.
  fs.unlink(): 파일 삭제.
  fs.mkdir(): 디렉토리 생성.
  fs.readdir(): 디렉토리 내용 읽기.
  fs.stat(): 파일 또는 디렉토리 정보 가져오기.
*/

// 1. 파일에 쓰기(write)
const fs = require('fs');

// const content = 'Hello~ World!';

// fs.writeFile('exam.txt', content, 'utf8', (err) => {
//   if(err){
//     console.error('파일 쓰기 에러', err);
//     return;
//   }
//   console.log('파일 쓰기 성공');
// });

// 2. 파일 읽기

fs.readFile('exam.txt', 'utf8', (err, data) => {
  if(err){
    console.log('파일 읽기 에러:', err);
    return;
  }
  console.log('파일로부터 읽은 데이터:', data);
})