/*
예외처리: 런타임에 발생되는 오류를 처리하는 매커니즘
  try: 예외가 발생되는 블록
  catch: 예외를 잡아 처리하는 블록
  finally: 예외 발생 여부와 관계 없이 무조건 실행하는 블록
  throw: 예외를 발생시키는 키워드

try...catch:
try 블록 안의 코드를 실행
try 블록에서 예외가 발생하면, 해당 예외가 catch 블록에서 처리
예외가 발생하지 않으면 catch 블록은 실행되지 않음

try...finally:
try 블록 안의 코드를 실행
finally 블록은 try 블록이 끝난 후 예외 발생 여부와 상관없이 항상 실행
이 구문은 예외 처리 없이 클린업 작업을 보장하고자 할 때 유용

try...catch...finally:
try 블록 안의 코드를 실행
try 블록에서 예외가 발생하면, catch 블록에서 해당 예외가 처리
finally 블록은 예외 발생 여부와 상관없이 항상 실행

*/

try {
  console.log('동작 중');
  nonExistentFunction(); // 존재하지 않는 함수 호출
  console.log('예외 발생으로 실행되지 않음');
} catch (error) {
  console.error(error); // ReferenceError: nonExistentFunction is not defined
} finally {
  console.log("무조건 실행");
}
var x = 5;
try {
  if (x == "")
    throw "empty"; //예외 발생 시키기
  var y = x + 3;
  console.log(y);
} catch (err) {
  console.log(`x is ${err}`);
} finally {
  console.log("try/catch문 제일 마지막에 반드시 실행");
}
