// Math.round(): 반올림
console.log("Math.round(4.9):", Math.round(4.9)); // 5
console.log("Math.round(4.7):", Math.round(4.7)); // 5
console.log("Math.round(4.4):", Math.round(4.4)); // 4
console.log("Math.round(4.2):", Math.round(4.2)); // 4
console.log("Math.round(-4.2):", Math.round(-4.2)); // -4

// Math.ceil(): 올림
console.log("Math.ceil(4.9):", Math.ceil(4.9)); // 5
console.log("Math.ceil(4.7):", Math.ceil(4.7)); // 5
console.log("Math.ceil(4.4):", Math.ceil(4.4)); // 5
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // 5
console.log("Math.ceil(-4.2):", Math.ceil(-4.2)); // -4

// Math.floor(): 내림
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.floor(4.7):", Math.floor(4.7)); // 4
console.log("Math.floor(4.4):", Math.floor(4.4)); // 4
console.log("Math.floor(4.2):", Math.floor(4.2)); // 4
console.log("Math.floor(-4.2):", Math.floor(-4.2)); // -5

// Math.trunc(): 소수점 이하 자름
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4
console.log("Math.trunc(4.7):", Math.trunc(4.7)); // 4
console.log("Math.trunc(4.4):", Math.trunc(4.4)); // 4
console.log("Math.trunc(4.2):", Math.trunc(4.2)); // 4
console.log("Math.trunc(-4.2):", Math.trunc(-4.2)); // -4

// Math.sign(): 숫자의 부호 반환
console.log("Math.sign(-4):", Math.sign(-4)); // -1
console.log("Math.sign(0):", Math.sign(0)); // 0
console.log("Math.sign(4):", Math.sign(4)); // 1

// Math.pow(): 제곱
console.log("Math.pow(8, 2):", Math.pow(8, 2)); // 64

// Math.sqrt(): 제곱근
console.log("Math.sqrt(64):", Math.sqrt(64)); // 8

// Math.abs(): 절대값
console.log("Math.abs(-4.7):", Math.abs(-4.7)); // 4.7

// Math.min(): 최소값
console.log("Math.min(0, 150, 30, 20, -8, -200):", Math.min(0, 150, 30, 20, -8, -200)); // -200

// Math.max(): 최대값
console.log("Math.max(0, 150, 30, 20, -8, -200):", Math.max(0, 150, 30, 20, -8, -200)); // 150

// Math.random(): 0과 1 사이의 난수 반환
console.log("Math.random():", Math.random());

// 0에서 9사이의 정수 반환
console.log("Math.floor(Math.random() * 10):", Math.floor(Math.random() * 10));

// 0에서 100사이의 정수 반환
console.log("Math.floor(Math.random() * 101):", Math.floor(Math.random() * 101));

// 1에서 10사이의 정수 반환
console.log("Math.floor(Math.random() * 10) + 1:", Math.floor(Math.random() * 10) + 1);

// 특정 범위 내의 정수 반환 함수
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random integer between 1 and 10:", getRndInteger(1, 10));
