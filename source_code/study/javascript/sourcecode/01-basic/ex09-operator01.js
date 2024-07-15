// 연산자
// 할당 연산자 =
var a = 1;
var b = a;
a = 10;
b = 20;
console.log(a, b);

// 비교 연산자( ==, !=, ===, !==)
var a = 1;
var b = 2;
console.log(a == b); 
console.log(a != b);

var c = 3;
var d = "3";
console.log(c == d);
console.log(c === d); //type 까지 확인

//논리 연산( &&, || )
var o1 = true && true;
var o2 = true && false;
var o3 = true || false;
var o4 = 3 == 3 && 4 == 4;

console.log(o1);
console.log(o2);
console.log(o3);
console.log(o4);

console.log(true && "hello");
console.log(true || "welcome");
console.log(false || "welcome");

// 증감 연산자( ++, --) 
    //전위/후위
var a = 10;
var b = a++;
var c = ++a;

console.log(a, b, c);

// 비교(관계) 연산자 ( > >= < <= )
console.log(10 > 1);
console.log(10 >= 1);
console.log(10 < 1);
console.log(10 <= 1);

//산술 연산자( + - * / %)
console.log(10 + 1);
console.log(10 - 1);
console.log(10 * 2);
console.log(10 / 3);
console.log(10 % 3);

// 복합 대입 연산자 ( [연산자]= )
var a = 10;
var b = 20;
a += b; //a = a + b 의미
a -= 3;
a *= 2;
a /= 3;
console.log(a);

//다음 예시의 출력 결과 이해하기
var a = 5, b = 6, c = 10, d = 0;
var bo = false;
d = ++a * b--;
console.log(a, b, d);
d = a++ + ++c - b--;
console.log(a, b, c, d);
a = 1;
b = 0;
bo = a++ > 0 || 1 < ++b * d-- / ++c;
console.log(a, b, c, d, bo);
bo = b++ > 0 && 1 < ++a / ++c * d++;
console.log(a, b, c, d, bo);


