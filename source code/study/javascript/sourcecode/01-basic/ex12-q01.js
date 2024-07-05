// 1부터 100까지의 합을 구하세요.
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(`1부터 100까지의 합: ${sum}`);

// 1부터 100까지 홀수의 합과 짝수의 합을 구하세요.
let oddSum = 0;
let evenSum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`1부터 100까지 홀수의 합: ${oddSum}`);
console.log(`1부터 100까지 짝수의 합: ${evenSum}`);

// 100부터 1까지의 수 중 3의 배수만 출력하세요.
console.log('100부터 1까지의 수 중 3의 배수:');

for (let i = 100; i >= 1; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 1부터 100까지의 수 중 3의 배수는 제외하고 
// 	3의 배수이면서 5의 배수인 수를 더하여 출력하세요.
let specialSum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 !== 0 && i % 5 === 0) {
    specialSum += i;
  }
}

console.log(`1부터 100까지의 수 중 3의 배수를 제외하고 3의 배수이면서 5의 배수인 수의 합: ${specialSum}`);

// 두 수를 입력 받아 두 수 사이의 합을 구하세요.(ex. 0 ~ 11 = 55)
let num1 = parseInt(prompt("첫 번째 수를 입력하세요:"));
let num2 = parseInt(prompt("두 번째 수를 입력하세요:"));

let n1 = num1;
let n2 = num2;
if(n1 > n2){
  let tmp = n1;
  n1 = n2;
  n2 = tmp;
}

let sumBetween = 0;

for (let i = n1+1; i < n2; i++) {
  sumBetween += i;
}

console.log(`${num1}부터 ${num2}사이 합: ${sumBetween}`);

// 사용자로부터 열 개의 정수를 입력 받아 평균을 구하세요.
let totalSum = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt(`정수 ${i}를 입력하세요:`));
  totalSum += num;
}

let average = totalSum / 10;
console.log(`입력한 열 개의 정수의 평균: ${average}`);
