import {Person} from './01_classDefination.js';

class Student extends Person{
    static #instanceCount = 0;
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
        Student.#instanceCount++;
    }
    getStudentId(){
        console.log(`My student id is ${this.studentId}`);
    }
    static getStudentCount(){
        console.log(`Total number of students: ${Student.#instanceCount}`);
    }
}

const student1 = new Student('John', 30, '1234');
const student2 = new Student('John', 30, '1234');
student1.getStudentId();
Student.getStudentCount();