//let n = parseInt("1234"); //숫자 문자열을 숫자로
//let n2 = parseFloat("3.14"); //숫자 문자열을 숫자로

//let n = parseInt(prompt('숫자 입력:'));

// let data = prompt('숫자 입력:');
// let n = parseInt(data);

// console.log(n + 1);

let a = 10;
let b = 20;
let c = 'hello';

let d = `첫 번째 값 ${a}, 두 번째 값 ${b}, ${c}`;
console.log(d);

// 키와 몸무게를 입력받기
let height = parseFloat(prompt("키를 입력하세요 (cm):"));

// 표준 체중 계산
let standardWeight = (height - 100) * 0.9;
console.log(`표준 체중: ${standardWeight.toFixed(2)} kg`);

//몸무게 입력
let weight = parseFloat(prompt("몸무게를 입력하세요 (kg):"));

// 비만도 비율 계산
let obesityRate = (weight / standardWeight) * 100;
console.log(`비만도 비율: ${obesityRate.toFixed(2)} %`);