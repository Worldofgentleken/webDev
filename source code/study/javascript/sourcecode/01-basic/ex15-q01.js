// 수를 입력 받아 1부터 입력 받은 수 까지 홀수의 합을 반환하는 함수

let n = 9;
let sum = 0;
for(let i = 1; i <= n; i+=2){
  sum += i;
}
console.log(`1 ~ ${n}까지 홀수의 합:${sum}`);


function mysum(n){
  console.log('함수가 동작했지롱');
  let sum = 0;
  for(let i = 1; i <= n; i+=2){
    sum += i;
  }
  return sum;
} 
let result = mysum(9);

console.log(`1 ~ ${n}까지 홀수의 합:${result}`);


// 인자로 N을 전달하면 N에 대한 절대값을 반환하는 함수
function myabs(n){
  return n < 0 ? -n : n;
}
console.log(myabs(3));
console.log(myabs(-3));

// cm값을 inch 값으로 반환하는 함수(1 Inch == 2.54cm)
function cmToInch(cm){
  return cm / 2.54;
}

console.log(cmToInch(2.54));

// 파일의 용량(byte)을 매개변수로 입력 받아 bit단위로 반환하는 함수
//	  파일의 용량을 입력할 때 단위도 입력한다.(G, M, K)
//	  ex) byteToBit(32,’G’);
//      	byteToBit(64,’M’);
/*
  8b  = 1B 
  1024B = 1KB
  1024KB = 1MB
  1024MB = 1GB
  1024MB = 1TB
  ..
  ..
*/

function mypow(n, m){
  return n ** m; // 거듭제곱 연산자
}

function byteTobit(size, unit){
  let bit = 0;
  switch(unit){
    // case 'G': bit = size * 1024 * 1024 * 1024; break;
    //case 'G': bit = size * mypow(1024, 3); break;
    case 'G': bit = size * Math.pow(1024, 3); break;
    // case 'M': bit = size * 1024 * 1024; break;
    case 'M': bit = size * 1024 ** 2; break;
    case 'K': bit = size * 1024; break;
  }
  return bit * 8;
}

console.log(byteTobit(1, 'B'));
console.log(byteTobit(1, 'K'));
console.log(byteTobit(1, 'M'));
console.log(byteTobit(1, 'G'));

// 비만도 측정 및 판정
function calculateStandardWeight(height) {
  const standardWeight = (height - 100) * 0.9;
  return standardWeight;
}

function calculateObesity(height, weight) {
  const standardWeight = calculateStandardWeight(height);
  const obesity = (weight / standardWeight) * 100;
  return obesity;
}

function determineObesityLevel(obesity) {
  if (obesity < 80) {
    return "저체중";
  } else if (obesity >= 80 && obesity < 90) {
    return "경한저체중";
  } else if (obesity >= 90 && obesity < 110) {
    return "정상체중";
  } else if (obesity >= 110 && obesity < 120) {
    return "과체중";
  } else if (obesity >= 120 && obesity < 130) {
    return "경도비만";
  } else if (obesity >= 130 && obesity < 150) {
    return "중증도비만";
  } else if (obesity >= 150 && obesity < 200) {
    return "고도비만";
  } else {
    return "위험한 비만";
  }
}

// 예시 호출
const height = 170; // cm
const weight = 70; // kg
const obesity = calculateObesity(height, weight);
const obesityLevel = determineObesityLevel(obesity);

console.log(`비만도: ${obesity}%`); // 비만도: 88.23529411764706%
console.log(`판정: ${obesityLevel}`); // 판정: 정상체중