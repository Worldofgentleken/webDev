/*
Arrow Function

형식
  (param1, param2, ..., paramN) => {
      // 함수 본문
      return expression;
  }

  매개변수가 1개일 경우 괄호 생략 가능
  함수 본문이 단일 표현식일 경우 중괄호 및 return 생략 가능

특징
  코드가 더 간결하고 읽기 쉬워짐
  화살표 함수는 자신만의 this를 가지지 않고, 정의된 위치에서의 this를 그대로 사용
  일반 함수의 this와 관련된 문제를 피할 수 있음

*/

// 예시
// 매개변수가 없는 화살표 함수
const sayHello = () => {
  console.log("Hello, world!");
};

sayHello(); // 출력: Hello, world!

// 매개변수가 하나인 화살표 함수
const greet = name => {
  console.log(`Hello, ${name}!`);
};

greet("Alice"); // 출력: Hello, Alice!

// 매개변수가 여러 개인 화살표 함수
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 출력: 5

// 단일 표현식으로 이루어진 화살표 함수
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 출력: 20


// this 바인딩 예시
function person1() {
  this.age = 0;

  // 일반 함수
  setInterval(function() {
      this.age++;
      console.log(`일반 함수: ${this.age}`);
  }, 1000);
}
new person1(); // 출력: NaN (this.age가 undefined인 상태에서 1씩 증가 시도)

// 콜백함수, setTimeout, setInterval 내에서 일반 함수를 사용하면 this는 전역 객체를 가리킴
// 브라우저 실행 환경인 경우 window객체를 가리킴
// self, that 같은 변수를 이용하여 this를 저장하고 사용해야 함

function person2() {
  this.age = 0;
  var self = this; // this를 변수에 저장

  setInterval(function() {
      self.age++; // self를 사용하여 this에 접근
      console.log(`일반 함수의 self 활용: ${self.age}`);
  }, 1000);
}
new person2(); // 출력: 1, 2, 3, ...

// 화살표 함수
function personArrow() {
  this.age = 0;

  setInterval(() => {
      this.age++; //personArrow 객체를 가리킴
      console.log(`Arrow function: ${this.age}`);
  }, 1000);
}

new personArrow(); // 출력: 1, 2, 3, ... (this.age가 정상적으로 증가)
