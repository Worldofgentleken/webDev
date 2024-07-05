// 입력한 데이터가 3의 배수인 경우 출력하시오.
let number1 = parseInt(prompt("수를 입력하세요:"));

if (number1 % 3 === 0) {
  console.log(`${number1}은(는) 3의 배수입니다.`);
}

// 수를 입력 받아 짝,홀수를 구분하여 출력하시오.
let number2 = parseInt(prompt("수를 입력하세요:"));

if (number2 % 2 === 0) {
  console.log(`${number2}은(는) 짝수입니다.`);
} else {
  console.log(`${number2}은(는) 홀수입니다.`);
}

// 두 수를 입력 받아 큰 수를 출력하시오.
let n1 = parseInt(prompt("첫 번째 수를 입력하세요:"));
let n2 = parseInt(prompt("두 번째 수를 입력하세요:"));

if (n1 > n2) {
  console.log(`더 큰 수는 ${n1}입니다.`);
} else if (n2 > n1) {
  console.log(`더 큰 수는 ${n2}입니다.`);
} else {
  console.log("두 수는 같습니다.");
}

// 세 수를 입력 받아 큰 순서대로 출력하시오.
let num1 = parseInt(prompt("첫 번째 수를 입력하세요:"));
let num2 = parseInt(prompt("두 번째 수를 입력하세요:"));
let num3 = parseInt(prompt("세 번째 수를 입력하세요:"));

if(num2 >= num1 && num2 >= num3){
  let tmp = num1;
  num1 = num2;
  num2 = tmp;
}else if(num3 >= num1 && num3 >= num2){
  let tmp = num1;
  num1 = num3;
  num3 = tmp;
}
if(num3 >= num2){
  let tmp = num2;
  num2 = num3;
  num3 = tmp;
}
console.log(`큰 순서대로: ${num1}, ${num2}, ${num3}`);

// 두수를 입력 받아 큰 수가 짝수이면 출력하시오.
let su1 = parseInt(prompt("첫 번째 수를 입력하세요:"));
let su2 = parseInt(prompt("두 번째 수를 입력하세요:"));

let larger = su1 > su2 ? su1 : su2;

if (larger % 2 === 0) {
  console.log(`더 큰 수 ${larger}은(는) 짝수입니다.`);
}

// 두수를 입력 받아 합이 짝수이고 3의 배수면 출력하시오.
let s1 = parseInt(prompt("첫 번째 수를 입력하세요:"));
let s2 = parseInt(prompt("두 번째 수를 입력하세요:"));

let sum = s1 + s2;

if (sum % 2 === 0 && sum % 3 === 0) {
  console.log(`두 수의 합 ${sum}은(는) 짝수이고 3의 배수입니다.`);
}


// 수를 입력 받아 출력하시오. (ex. 1,2,4,5,7,8,10,11,13,14,15,16,17,19..)
//	(단, 3의 배수는 제외하고 3의 배수이면서 5의 배수인 수는 출력)
let number = parseInt(prompt("수를 입력하세요:"));

if (number % 3 !== 0 || (number % 3 === 0 && number % 5 === 0)) {
  console.log(`${number}`);
}




