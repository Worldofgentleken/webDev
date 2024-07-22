/*
path 모듈
  파일 및 디렉토리 경로를 처리하는 유틸리티를 제공하는 모듈

주요 메서드:
  path.join(): 경로 합치기.
  path.resolve(): 절대 경로 반환.
  path.basename(): 파일명 반환.
  path.dirname(): 디렉토리명 반환.
  path.extname(): 파일 확장자 반환.
*/

const path = require('path');

const filePath = '/home/usr/dir/file.txt';
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.resolve(filePath));