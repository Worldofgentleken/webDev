// function -> 함수 -> 기능
function 자판기(choice) {
  let drink = "물";
  switch (choice) {
    case "커피":
      drink = "밀크커피"; break;
    case "우리차":
      drink = "율무차"; break;
  }
  return drink;
}

console.log(자판기("커피"));
console.log(자판기("우리차"));
console.log(자판기("코코아"));

function sum1(p1, p2) {
  let sum = p1 + p2;
  return sum;
}

let s1 = sum1(23, 43); // 함수 호출
console.log(s1);

// 함수를 변수에 
sum2 = function(p1, p2) {
  let sum = p1 + p2;
  return sum;
}

s = sum2;
console.log(sum2(1, 2)); //함수 호출
console.log(s(1, 3));

// Arrow Function(화살표 함수)
sum3 = (p1, p2) => {
  let sum = p1 + p2;
  return sum;
}

console.log(sum3(3, 2));

mf = (a, b) => a * b;
console.log(mf(2, 2));

// 함수를 왜?
// 자주 사용하는 기능을 정의 해두고 필요할 때 호출하여 사용

// 입력(매개변수), 처리(본문), 출력(return)
function nToTotal(value){
  let sum = 0;
  for(let i = 1; i <= value; i++){
    sum += i;
  }
  return sum;
}


// let n = parseInt(prompt('수 입력:'));
// let total = 0;
// for(let i = 1; i <= n; i++){
//   total += i;
// }
// console.log('total:', total);
console.log('어떤 코드');
console.log('어떤 코드');
console.log('어떤 코드');
console.log(nToTotal(10));
console.log('어떤 코드');
console.log('어떤 코드');
console.log('어떤 코드');
console.log('어떤 코드');
console.log('어떤 코드');
console.log('어떤 코드');
console.log(nToTotal(5));
console.log('어떤 코드');
console.log('어떤 코드');
console.log('어떤 코드');
console.log('어떤 코드');
console.log(nToTotal(3));
console.log('어떤 코드');
console.log('어떤 코드');
console.log('어떤 코드');
console.log(nToTotal(7));

