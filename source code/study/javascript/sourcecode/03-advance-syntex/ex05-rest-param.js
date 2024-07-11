// Rest parameter
// 가변길이 인자 처리를 위한 기능
// 역할: 함수에 전달된 나머지 인수들을 배열로 모아줌.
// 표기법: ... (점 세 개)와 함께 사용됨.
// 위치: 항상 함수 매개변수 목록의 마지막에 위치해야 함.

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// 여러 개의 인수를 전달할 때
console.log(sum(1, 2, 3)); // 출력: 6
console.log(sum(4, 5, 6, 7, 8)); // 출력: 30

// 인수가 없을 때
console.log(sum()); // 출력: 0


// 다른 매개변수와 rest parameter 함께 사용
// 예시1
function example(param1, param2, ...rest) {
  console.log(param1); // 첫 번째 인수
  console.log(param2); // 두 번째 인수
  console.log(rest);   // 나머지 모든 인수를 배열로
}

// 함수 호출
example(1, 2, 3, 4, 5, 6);

// 예시2
function introduce(name, age, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Hobbies: ${hobbies.join(', ')}`);
}

// 여러 개의 인수를 전달할 때
introduce('홍길동', 30, '이순신', '강감찬', '임꺽정');

// 인수가 적을 때
introduce('장보고', 25); // Hobbies는 빈 배열이 됨
