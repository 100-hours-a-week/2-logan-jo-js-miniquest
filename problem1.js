// problem1(자바스크립트 객체)의 1번 퀘스트
const myPet = {
  name: "Momo",
  type: "Cat",
};

console.log(myPet.name, myPet.type);

// problem1(자바스크립트 객체)의 2번 퀘스트
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
const person = new Person("Jane Doe", 25);
person.greet();
