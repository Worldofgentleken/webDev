
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} 소리를 낸다.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} 멍멍.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} 냥냥.`);
  }
}

const dog = new Dog('뽀삐');
dog.speak(); // Rex barks.

const cat = new Cat('까까');
cat.speak(); // Rex barks.


// 자동차 클래스 정의
class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
  getModelName() {
    return this.modelName;
  }
  getModelYear() {
    return this.modelYear;
  }
  getPrice() {
    return this.price;
  }
  setModelName(modelName) {
    this.modelName = modelName;
  }
  setModelYear(modelYear) {
    this.modelYear = modelYear;
  }
  setType(type) {
    this.type = type;
  }
  setPrice(price) {
    this.price = price;
  }
}

let car = new Car("spark", "2019", "LT", 1300);
let car2 = new Car("genesis", "2021", "g", 6500);

let modelName = car.getModelName(); //차량 모델명 가져오기
car.setPrice(1400); //차량 가격 변경
car2.setPrice(6000);

console.log(car.getModelName());
console.log(car.getModelYear());
console.log(car.getPrice());
console.log(car.getPrice());

console.log(car2.getModelName());
console.log(car2.getModelYear());
console.log(car2.getPrice());


// 기존 Car를 상속해서 정의
class ElectricCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    super(modelName, modelYear, "e", price);
    this.chargeTime = chargeTime;
  }
  setChargeTime(time) {
    this.chargeTime = time;
  }
  getChargeTime() {
    return this.chargeTime;
  }
}

let eleCar1 = new ElectricCar("테슬라", "2021", 4000, 60);

eleCar1.setChargeTime(60);
console.log(eleCar1.getModelName());
console.log(eleCar1.getChargeTime());
