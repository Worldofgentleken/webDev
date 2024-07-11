/* 템플릿 리터럴(Template Literal)
   ES6(ECMAScript 2015)에서 도입된 JavaScript의 새로운 문자열 표기법
   백틱(backtick)(`)으로 둘러싸여 있으며, 문자열 내에서 변수와 표현식을 삽입할 수 있는 기능을 제공

   템플릿 리터럴의 주요 기능
    문자열 내 변수 삽입 (String Interpolation)
    여러 줄 문자열 (Multi-line Strings)
    내장 표현식 (Embedded Expressions)
    태그드 템플릿 리터럴 (Tagged Template Literals)

*/

// 문자열 내 변수 삽입 (String Interpolation)
const name = "홍길동";
const age = 25;
const greeting = `안녕하세요, 저는 ${name}, ${age}살 입니다.`;

console.log(greeting); // 출력: Hello, my name is Alice and I am 25 years old.

// 여러 줄 문자열 (Multi-line Strings)
const multiLineString = `여러 줄로
문자열을
만들 수 있습니다.`;

console.log(multiLineString);
// 출력:
// This is a string
// that spans across
// multiple lines.

// 내장 표현식 (Embedded Expressions)
const n1 = 5;
const n2 = 10;
const ret = `${n1} + ${n2} = ${n1 + n2}`;

console.log(ret); // 출력: The sum of 5 and 10 is 15.

// 태그드 템플릿 리터럴 (Tagged Template Literals)
function tag(strings, ...values) {
  console.log(strings); // 고정 문자열 따로
  console.log(values); // 값 따로
  return `결과: ${values.join(', ')}`;
}

const a = 5;
const b = 10;
const result = tag`이 ${a}와 ${b}의 합은 ${a + b}.`;

console.log(result); // 출력: Result: 5, 10, 15
