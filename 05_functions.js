// Activity 1 function declaration
// task 1
function EvenOddCheck(num){
    if(num%2===0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

EvenOddCheck(0);

// task 2
function SquareOfNum(num){
    return num*num;
}
let square = SquareOfNum(-5);
console.log(square);

// Activity 2 function expression
// task 3
let maxOfTwo = function(num1, num2){
    if(num1>num2){
        console.log(num1," is greater than", num2);
    }else if(num1<num2){
        console.log(num2," is greater than", num1);
    }else{
        console.log("Both are equal");
    }
}
maxOfTwo(5.1,5);

// task 4
let concatenateString = function(str1, str2){
     str1.concat(str2);
    console.log(str1);
    return str1.concat(str2);
    // return str1+" "+str2;
}
let str = concatenateString("Hello", "World");
console.log(str);

// activity 3 arrow functions
// task 5
let sumOfTwo = (num1, num2)=>{
    return num1+num2;
}
let sum = sumOfTwo(5,5);
console.log(sum);

// task 6
let checkCharInString = (str, char)=>{
    if(str.includes(char)){
        return true
    }else{
        return false
    }
}
let check = checkCharInString("Hello", "e");
console.log(check);

// activity 4 function parameters and default values
// task 7
function productOfTwo(num1,num2 = 2){
    return num1*num2;
}
let product = productOfTwo(5,5);
console.log(product);

// task 8
function greetUser(name,age=20){
    return "Hello "+name+" your age is "+age;
}
let greet = greetUser("John");
console.log(greet);

// activity 5 higher order function
// task 9
// write a higher order function that takes a func and a number, and calls the function that many times
function higherOrder(func, num){
    for(let i=0; i<num; i++){
        func();
    }
}
function printHello(){
    console.log("Hello");
}
higherOrder(printHello, 5);

// task 10
function higherOrder2(func,func2, val){
    let res = func(val);
    return func2(res);
}
function square1(num){
    return num*num;
}
function double(num){
    return num*2;
}
let result = higherOrder2(square1, double, 5);
console.log(result);
