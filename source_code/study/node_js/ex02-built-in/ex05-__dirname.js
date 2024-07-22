/*
__dirname
  현재 모듈의 디렉토리 경로
  현재 실행 중인 스크립트 파일이 위치한 디렉토리의 절대 경로를 제공
*/

console.log(__dirname);

const path = require('path');
const path1 = path.join(__dirname, 'file.txt');
console.log(path1);
const path2 = path.join(__dirname, 'data', 'file.txt');
console.log(path2);