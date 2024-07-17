// 호이스팅(hoisting): 변수 및 함수 선언이 스코프의 최상위로 끌어올려지는 동작

// 변수 호이스팅(var, let, const가 동작이 다름)
console.log(hoistedVar1); // undefined
var hoistedVar1 = "This variable is hoisted";

function hoistedFunction() {
  console.log(hoistedVar2); // undefined
  var hoistedVar2 = "Hoisted within function";
}
hoistedFunction();

// let, const 호이스팅
//console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "This variable is hoisted with let";

//console.log(hoistedConst); //  ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "This variable is hoisted with const";

//함수 호이스팅
hoistedFunction1(); // "This function is hoisted"

function hoistedFunction1() {
  console.log("This function is hoisted");
}


//함수 표현식
// hoistedExpression(); // TypeError: hoistedExpression is not a function
var hoistedExpression = function() {
  console.log("This is a hoisted function expression");
}
hoistedExpression();