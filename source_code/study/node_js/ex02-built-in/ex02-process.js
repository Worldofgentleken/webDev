/*
process 객체
  현재 실행 중인 Node.js 프로세스에 대한 정보를 제공하고 제어할 수 있는 전역 객체
  환경 변수, 표준 입출력 스트림, 종료 이벤트 등 다양한 기능 사용가능
*/

// 환경 변수 NODE_ENV 출력
//console.log(process.env.NODE_ENV); 

// 프로세스 실행 시 전달된 명령줄 인수 배열
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });


// process.exit([code])
// 프로세스를 종료(선택적으로 종료 코드 지정 가능. 기본값 0(성공))
// process.exit(1); // 프로세스를 종료하고 종료 코드 1을 반환

// 현재 작업 디렉토리
//process.cwd();

// process.nextTick(callback);
// 이벤트 루프가 현재 작업을 완료한 후 콜백 함수를 실행
// process.nextTick(() => {
//   console.log('Next tick callback');
// });
// console.log('This will run before nextTick callback');

// process.on(event, listener)
// 특정 이벤트에 대한 리스너 설정('exit', 'uncaughtException', 'SIGINT' 등의 이벤트 처리에 사용)
// process.on('exit', (code) => {
//   console.log(`About to exit with code: ${code}`);
// });

// process.on('uncaughtException', (err) => {
//   console.error('There was an uncaught error', err);
//   process.exit(1); // 에러 발생 시 프로세스 종료
// });

// 강제로 에러를 발생시켜 uncaughtException 핸들러가 작동하게 함
// throw new Error('Oops!');

// 전체 적용 예시
// 노드 버전
console.log(process.version);

// 프로세서 아키텍처
console.log(process.arch);

// OS정보
console.log(process.platform);

// process id
console.log(process.pid);

// 실행 후 지난 시간
console.log(process.uptime());

// 노드 경로
console.log(process.execPath);

// 환경 변수 읽기(NODE_OPTIONS, 보안 정보 등 환경변수 필요 시 활용)
console.log(`PATH: ${process.env.PATH}`);

// 명령줄 인수 처리
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

// 현재 작업 디렉토리 출력
console.log(`현재 디렉토리: ${process.cwd()}`);

// nextTick 사용 예시
process.nextTick(() => {
    console.log('nextTick 콜백');
});
console.log('nextTick 콜백보다 먼저 실행');

// exit 이벤트 처리
process.on('exit', (code) => {
    console.log(`종료 코드: ${code}`);
});

// uncaughtException 처리
process.on('uncaughtException', (err) => {
    console.error('에러 ', err);
    process.exit(1); // 에러 발생 시 프로세스 종료
});

// 명령줄 인수로 'error'를 받으면 강제로 에러 발생
if (process.argv.includes('error')) {
    throw new Error('에러 발생');
}

