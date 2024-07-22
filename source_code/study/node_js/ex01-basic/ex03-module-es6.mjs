// ES6 모듈 시스템
// mjs가 아닌 ES6 형식의 모듈(.js)을 불러오려는 경우
/*
  프로젝트 최상위에 package.json 파일에(없다면 생성) 다음 내용 작성
  {
    "type": "module"
  }

*/
import { add, sub } from './ex03-math1.mjs';
import { mul, div } from './ex03-math2.mjs';
import mod, { pow } from './ex03-math3.mjs';

let n1 = 10;
let n2 = 3;

console.log(add(n1, n2));
console.log(sub(n1, n2));
console.log(mul(n1, n2));
console.log(div(n1, n2));
console.log(mod(n1, n2));
console.log(pow(n1, n2));