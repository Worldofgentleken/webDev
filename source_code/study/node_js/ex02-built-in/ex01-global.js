/*
global 객체
  모든 모듈에서 접근할 수 있는 전역 객체
    모듈 간에 공통 데이터를 공유하거나 전역 변수 및 함수를 정의 가능
    global 객체의 사용은 필요한 경우에만 최소화(코드의 가독성과 유지보수성 저하를 야기)
*/

// 전역 변수 정의
global.config = {
  appName: 'MyApp',
  version: '1.0.0'
};

// 전역 함수 정의
global.logMessage = (message) => {
  console.log(`[${new Date().toISOString()}] ${message}`);
};

// main.js 파일을 실행
require('./ex01-main');
