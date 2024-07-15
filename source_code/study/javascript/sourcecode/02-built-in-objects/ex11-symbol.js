// symbol: 고유한 별칭을 만드는 역할
const person = {
  name: "홍길동",
  age: 20,
  getName: function(){
    return this.name + " " + this.age;
  }
}
console.log(person.name);
console.log(person.age);
console.log(person.getName());

for(const key in person){
  console.log(key);
}

const person2 = {
  name: "이순신",
  age: 30
};

const getName = Symbol("getName"); //심볼 생성
person2[getName] = function(){ //심볼 등록
  return this.age + " " + this.name;
}

const height = Symbol("height");
person2[height] = 164.7;

for(const key in person2){
  console.log(key);
}

// 심볼을 사용
console.log(person2[getName]());
console.log(person2[height]);