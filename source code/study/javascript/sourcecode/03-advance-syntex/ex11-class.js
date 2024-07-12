class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('greet를 호출한 객체:', this);
    return `내 이름은 ${this.name}이고 나이는 ${this.age}세이다.`;
  }
}

const hong = new Person('홍길동', 25);
const lee = new Person('이순신', 20);
console.log(hong.greet()); // 내 이름은 홍길동이고 나이는 25세이다.
console.log(lee.greet());
hong.a = 100; //개조?
console.log(hong.a);
console.log(lee.a);
