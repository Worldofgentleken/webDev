// for .. in
let person = {
  name: '홍길동',
  age: 20
}

for(let key in person){
  console.log(key, ':', person[key]);
}

let company = ["네", "카", "라", "쿠", "베", "당", "토"];
for(let c in company){
  console.log(c); //index 출력
  console.log(company[c]);
}
console.log('-----');

// for .. of
for(let c of company){
  console.log(c); //요소
}

let str = "javascript";
for(let ch of str){
  console.log(ch);
}