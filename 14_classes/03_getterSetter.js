class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

const person1 = new Person('John', 'Doe');
console.log(person1.fullName); 
person1.fullName = 'Jane Doe';
console.log(person1.fullName);