// 자바스크립트 객체를 JSON 문자열로 변환(stringify)
const data = {
  person: [
    { name: "홍길동", age: 20 },
    { name: "이순신", age: 32 },
    { name: "강감찬", age: 24 }
  ]
}

console.log(data);
jsonString = JSON.stringify(data); //문자열로 변환
console.log(jsonString);

const text = `{
  "person": [
    { "name": "홍길동", "age": 20 },
    { "name": "이순신", "age": 32 },
    { "name": "강감찬", "age": 24 }
  ]
}`
console.log(text);
const obj = JSON.parse(text); //JSON형식 데이터를 자바스크립트 객체로 변환
console.log(obj);
console.log(obj.person);
console.log(obj.person[0]);
console.log(obj.person[0].name);

const newPerson = { name: "임꺽정", age: 78 };
obj.person.push(newPerson)
console.log(obj);

const objString = JSON.stringify(obj);
console.log(objString);

