// Activity: 2 basic error handling with try catch
// task:1
function throwError() {
    try {
        throw new Error('This is an error');
    } catch (error) {
        console.log("yes",error);
    }
}
// throwError();
// task:2
function divideTwoNumbers(a,b){
    try {
        if(b==0){
            throw new Error('denominator is 0');
        }
        else{
            console.log(a/b);
        }
    } catch (error) {
        console.log(error);
    }
}
// divideTwoNumbers(10,0);

// Activity 2 finally block
// task:3
function divideTwoNumbers(a,b){
    try {
        if(b==0){
            console.log("try");
            throw new Error('denominator is 0');
        }
        else{
            console.log(a/b);
        }
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("finally block");
    }
}
// divideTwoNumbers(10,0);

// activity 3 custom error objects
// task:4
class customError extends Error{
    constructor(message){
        super(message);
        // this.name = "customError";
    }
} 
function throwError() {
    try {
        throw new customError('This is an error');
    } catch (error) {
        console.log("yes",error);
    }
}
// throwError();

// task 5
function checkUserInput(str){
    try {
        if(str.length==0){
            throw new customError('empty string');
        }
        else{
            console.log(str);
        }
    } catch (error) {
        console.log(error);
    }
}

// checkUserInput('');

// activity 4 error handling in promises
// task 6
function randomPromise(){
    return new Promise((resolve,reject)=>{
        let random = Math.floor(Math.random()*10)
        console.log(random);
        if(random>5){
            resolve("success");
        }
        else{
            reject( new customError('random number is less than 5'));
        }
    })
}

// randomPromise()
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// task 7
async function resolvePromise(){
    try {
        const data = await randomPromise();
        console.log(data);
    
    } catch (error) {
        console.log(error);
    }
}
// resolvePromise();

// activity 5 graceful error handling in fetch
// task 8
// fetch('https://jsonplacehoder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error.message));

// task 9
async function fetchApi(){
    try {
        const response = await fetch('https://jsonplacehoder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
fetchApi();
