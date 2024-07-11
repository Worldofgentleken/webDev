/* Object Literal Syntax Extension
    ES6(ECMAScript 2015)에서 도입된 기능
    객체를 정의할 때 더 간결하고 편리한 방법을 제공
    
    주요 기능
      속성 축약(Property Shorthand)
      메서드 축약(Method Shorthand)
*/

// 속성 축약
// 객체 리터럴을 정의할 때 객체의 속성 이름과 변수 이름이 동일할 경우, 간단하게 정의 가능
// const name = "홍길동";
// const age = 25;

// // ES5 방식
// const personES5 = {
//     name: name,
//     age: age
// };

// // ES6 속성 축약 방식
// const personES6 = {
//     name,
//     age
// };

// console.log(personES5); // 출력: { name: '홍길동', age: 25 }
// console.log(personES6); // 출력: { name: '홍길동', age: 25 }


// 메서드 축약
// 객체 리터럴을 정의할 때, 함수 표현을 더 간단하게 작성
// ES5 방식
const personES5 = {
  name: "홍길동",
  age: 25,
  greet: function() {
      console.log(`내 이름은 ${this.name}입니다.`);
  }
};

// ES6 메서드 축약 방식
const personES6 = {
  name: "홍길동",
  age: 25,
  greet() {
      console.log(`내 이름은 ${this.name}입니다.`);
  }
};

personES5.greet(); // 출력: 내 이름은 홍길동입니다.
personES6.greet(); // 출력: 내 이름은 홍길동입니다.

// 계산된 속성 이름 (Computed Property Names)
// 객체 리터럴을 정의할 때 속성 이름을 동적으로 지정할 수 있는 기능

const propName = "age"; //속성으로 사용할 이름이 들어있는 변수

const person = {
    name: "홍길동",
    [propName]: 25
};

console.log(person); // 출력: { name: '홍길동', age: 25 }
