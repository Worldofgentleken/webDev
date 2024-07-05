// Math.random(): 0 ~ 1사이의 난수 생성
for (let i = 0; i < 5; i++) {
  console.log(Math.random());
}

// let n1 = Math.random();
// let n2 = n1 * 100; // 0 ~ 99
// let n3 = Math.floor(n2);
// console.log(n1);
// console.log(n2);
// console.log(n3);

console.log(Math.floor(Math.random() * 100)); //0 ~ 99
//문제
console.log(Math.floor(Math.random() * 10 + 1)); //1 ~ 10
console.log(Math.floor(Math.random() * 11 + 10)); //10 ~ 20
console.log(Math.floor(Math.random() * 3 - 1)); //-1 ~ 1

// 범위를 지정한 난수 생성 함수
function myrand(range, start){ //range: 갯수, start: 시작값
  return Math.floor(Math.random() * range + start);
}

console.log(myrand(10, 1));
console.log(myrand(11, 10));
console.log(myrand(3, -1));