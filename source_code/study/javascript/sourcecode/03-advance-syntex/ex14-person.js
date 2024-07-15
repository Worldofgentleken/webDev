// person.js
import { add } from './ex14-math.js';

export default class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(add(1,2));
    console.log(`Hello, my name is ${this.name}.`);
  }
}
