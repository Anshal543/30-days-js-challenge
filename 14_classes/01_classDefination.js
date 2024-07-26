// task 1: class definition

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    setAge(age) {
        this.age = age;
    }
    static staticMethod() {
        console.log('This is a static method');
    }
}

const person1 = new Person('John', 30);
// person1.greet(); 
person1.setAge(31);
// person1.greet();
Person.staticMethod();

export {Person}