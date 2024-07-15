function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// 인수를 전달하지 않았을 때
greet(); // 출력: Hello, Guest!

// 인수를 전달했을 때
greet("Alice"); // 출력: Hello, Alice!

// 두 개의 매개변수
function calculateArea(width = 10, height = 5) {
  return width * height;
}

// 인수를 전달하지 않았을 때
console.log(calculateArea()); // 출력: 50 (기본값 10 * 5)

// 하나의 인수만 전달했을 때
console.log(calculateArea(7)); // 출력: 35 (7 * 기본값 5)

// 두 개의 인수를 모두 전달했을 때
console.log(calculateArea(7, 3)); // 출력: 21 (7 * 3)
