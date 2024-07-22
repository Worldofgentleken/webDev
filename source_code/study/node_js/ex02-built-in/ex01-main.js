// 전역 변수 접근
console.log(`App Name: ${global.config.appName}`);
console.log(`App Version: ${global.config.version}`);

// 전역 함수 호출
global.logMessage('애플리케이션 시작');

// otherModule.js 파일을 실행
require('./ex01-other.js');