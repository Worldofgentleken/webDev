/*
  console 객체
    표준 출력 스트림과 표준 오류 스트림에 로그 메시지를 출력하는 데 사용
    노드의 console 객체는 브라우저의 console 객체와 비슷
    Node.js 환경에서 사용할 수 있는 추가적인 기능과 차이점이 존재
*/

// 표준 출력: console.log([data][, ...args]) 
console.log('Hello, World!');
console.log('Value:', 42);
console.log('Values:', 1, 2, 3);

// 표준 에러: console.error([data][, ...args])
console.error('0으로 나눌 수 없음');
console.error('에러:', new Error('에러 메시지'));

// 표준 에러(경고): console.warn([data][, ...args])
console.warn('경고 메시지');

// 정보 출력: console.info([data][, ...args])
console.info('정보 메시지');

// 디버그 메시지 출력: console.debug([data][, ...args])
console.debug('디버그 정보');

// 호출 스택 트레이스 출력: console.trace([message][, ...args])
function a() {
  function b() {
      console.trace('Trace message');
  }
  b();
}
a();

// 실행 시간 측정: console.time(label) / console.timeEnd(label)
console.time('timer');
// Some code block
setTimeout(() => {
    console.timeEnd('timer'); // 출력: timer: xxxms
}, 500);

// 테스트용: console.assert(value[, ...args])
// 주어진 표현식(value)이 거짓이면 오류 메시지를 출력(표현식이 참이면 아무런 동작 안 함)
console.assert(1 === 2, 'Assertion 실패1: 1 is not equal to 2');
console.assert(1 !== 2, 'Assertion 실패2: 1 is equal to 2');

// 객체 속성을 계층적으로 출력: console.dir(obj[, options])
const obj = { name: 'Alice', age: 25, address: { city: 'Wonderland' } };
console.dir(obj, { depth: null, colors: true });

// 콘솔 출력 지우기: console.clear()
//console.clear();

// 출력 횟수 출력: console.count([label])
console.count('counter');
console.count('counter');
console.countReset('counter');
console.count('counter');


