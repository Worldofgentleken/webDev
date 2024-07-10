// 숫자를 문자열로 변환
let x = 123;
console.log(x.toString()); // "123"
console.log((123).toString()); // "123"

// 숫자를 지수 표기법으로 변환
x = 10.656;
console.log(x.toExponential(2)); // "1.07e+1"
console.log(x.toExponential(4)); // "1.0656e+1"
console.log(x.toExponential(6)); // "1.065600e+1"

// 숫자를 고정 소수점 표기법으로 변환
x = 10.656;
console.log(x.toFixed(0)); // "11"
console.log(x.toFixed(2)); // "10.66"
console.log(x.toFixed(4)); // "10.6560"

// 숫자를 지정한 자릿수의 유효 숫자로 변환
x = 10.656;
console.log(x.toPrecision()); // "10.656"
console.log(x.toPrecision(2)); // "11"
console.log(x.toPrecision(4)); // "10.66"

// 문자열을 정수로 변환
console.log(parseInt("-10")); // -10
console.log(parseInt("-12.33")); // -10
console.log(parseInt("10")); // 10
console.log(parseInt("12.33")); // 10
console.log(parseInt("10 20 30")); // 10
console.log(parseInt("10 years")); // 10
console.log(parseInt("years 10")); // NaN

// 문자열을 부동 소수점 수로 변환
console.log(parseFloat("10")); // 10
console.log(parseFloat("12.33")); // 12.33
console.log(parseFloat("10 20 30")); // 10
console.log(parseFloat("10 years")); // 10
console.log(parseFloat("years 10")); // NaN
