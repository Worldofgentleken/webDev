// 전역 변수 접근
console.log(`다른 모듈에서 글로벌 변수 접근: ${global.config.appName}`);

// 전역 함수 호출
global.logMessage('다른 모듈에서 글로벌 함수 호출');
