/*
Destructuring Assignment(구조 분해 할당)
  배열이나 객체의 속성을 개별 변수로 쉽게 추출할 수 있는 문법
  코드가 더 간결해지고 가독성 향상
  배열과 객체 모두에 사용 가능

*/

// 배열 구조 분해 할당(배열의 요소를 순서대로 개별 변수에 할당)
const array1 = [1, 2, 3, 4];

const [first1, second1, third1] = array1;

console.log(first1);  // 출력: 1
console.log(second1); // 출력: 2
console.log(third1);  // 출력: 3

// 배열 요소를 특정 위치에 할당
const array2 = [1, 2, 3, 4, 5];

const [first2, , third2, ...rest] = array2;

console.log(first2);  // 출력: 1
console.log(third2);  // 출력: 3
console.log(rest);   // 출력: [4, 5]

//객체 구조 분해 할당(객체의 속성을 개별 변수에 할당)
const person = {
  name: "홍길동",
  age: 25,
  city: "산골짜기"
};

var { name, age, city } = person;

console.log(name); // 출력: 홍길동
console.log(age);  // 출력: 25
console.log(city); // 출력: 산골짜기

// 기본값 설정 또는 속성 이름 변경 가능
const subject = {
  subname: "자바스크립트",
  score: 99
};

var { subname, score, city = "Unknown" } = subject;
var { subname: subjectName, score: subjectScore } = subject;

console.log(city);      // 출력: Unknown (기본값)
console.log(subjectName); // 출력: 자바스크립트
console.log(subjectScore);  // 출력: 99
console.log(subject);


// 중첩 객체 구조 분해 할당(중첩된 배열이나 객체의 요소를 속성이름으로 개별 변수에 할당)
const human = {
  name: '홍길동',
  nickname: "장사",
  address: {
      addr: "산골",
      zip: "12345"
  }
};

const { nickname, address: { addr, zip } } = human;

console.log(name); // 출력: 홍길동
console.log(addr); // 출력: 산골
console.log(zip);  // 출력: 12345

// 함수 매개변수 구조 분해 할당
function info({ model, price }) {
  console.log(`제품: ${model}, 가격 $${price}.`);
}

const product = {
  model: "Computer",
  price: 54
};

info(product); // 출력: 제품: Computer, 가격 $54.
