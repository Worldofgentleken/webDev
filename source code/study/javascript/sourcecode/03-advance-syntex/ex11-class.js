class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `내 이름은 ${this.name}이고 나이는 ${this.age}세이다.`;
  }
}

const hong = new Person('홍길동', 25);
console.log(hong.greet()); // 내 이름은 홍길동이고 나이는 25세이다.

