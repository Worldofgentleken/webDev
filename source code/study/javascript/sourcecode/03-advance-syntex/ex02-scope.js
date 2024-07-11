// Global Scope
var globalVar = "글로벌 변수";

function globalFunction() {
  console.log('함수내에서', globalVar); // 접근 가능
}

console.log('전역에서', globalVar); // 접근 가능
globalFunction();
console.log();

// Function Scope
function myFunction() {
  var functionVar = "함수 변수";
  console.log(functionVar); // 접근 가능
}

myFunction();
//console.log(functionVar); // 에러: functionVar는 함수 스코프 내에서만 유효

// Block Scope
if (true) {
  let blockVar = "블록 변수";
  console.log(blockVar); // 접근 가능
}

//console.log(blockVar); // 에러: blockVar는 블록 스코프 내에서만 유효

// Lexical Scope: 함수가 선언된 위치에 따라 결정되는 스코프
// 내부 함수는 외부 함수의 변수에 접근 가능
function outerFunction() {
  var outerVar = "outter 변수";
  function innerFunction() {
    console.log('inner', outerVar); // 접근 가능
    }
  console.log('outer', outerVar);
  innerFunction();
}

outerFunction();
// innerFunction(); //호출 불가

// Closuer: 함수가 선언될 때의 렉시컬 환경 조합
// 함수가 선언된 스코프 외부에서 해당 스코프의 변수에 접근 가능
// 예시1
function outerFunction() {
  var outerVar = "I'm an outer variable";

  function innerFunction() {
    console.log(outerVar); // 접근 가능
  }

  return innerFunction; // innerFunction을 반환하여 클로저를 생성
}

const closure = outerFunction();
closure(); // "I'm an outer variable" 출력

// 예시2
function closureFunction(init) {
  var counter = init;

  return function () {
      return ++counter;
  }
}

var myClosure = closureFunction(1);
console.log(myClosure());
console.log(myClosure());
console.log(myClosure());