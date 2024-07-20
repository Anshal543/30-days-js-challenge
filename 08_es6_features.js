// Activity 1 Template literals
// Task: 1
let user = {
    name: "anshal",
    age: 20
}
console.log(`Hello ${user.name},Your age is ${user.age}`);

// Task:2 
let message = `Hello ${user.name},
Your age is ${user.age}`;
console.log(message);

// Activity 2: Destructuring
//Task: 1
let num = [1,2,3,4,5]
let [a,b] = num;
console.log(a,b);

// Task: 2
let book = {
    title:  "The Alchemist",
    author  : "Paulo Coeho",
}
let {title,author} = book;
console.log(title,author);

// Activity 3: Spread and rest operator
// Task: 1
let arr = [1,2,3,4,5];
let arr2 = [...arr,6,7,8,9];
console.log(arr2);

// Task: 2
function sum(... args){
    return args.reduce((a,b) => a+b);
}
console.log(sum(1,2,3,4,5));

// Activity 4: default parameters
// Task: 1
function product(a,b=1){
    return a*b;
}
console.log(product(5));
console.log(product(5,10));

// activity 5 enhanced object literals to crete object with methods and property
// Task: 1
let name =  "anshal";
let age = 20;
let user1 = {
    name,
    age,
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
user1.greet();
console.log(user1);

// Task: 2 object with computed property names based on variables
let prop = "name";
let name1 = "anshal";
let user2 = {
    [prop]: name1,
}
console.log(user2);
