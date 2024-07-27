// activity 1 understanding closure
//task 1
function outerFunction() {
    let outerVariable = 'I am outside!';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
const myInnerFunction = outerFunction();
// myInnerFunction(); 

// task 2
function counter(){
    let count  = 0;
    return {
        increment: function(){
            count++;
            
        },
        getvalue: function(){
            return count;
        }
    }
}
const myCounter = counter();
myCounter.increment();
// console.log(myCounter.getvalue());

function counter1(){
    let count  = 0;
    return function(){
        count ++
        return function(){
            return count;
        }
    }
}
const myCounter1 = counter1();
const increment = myCounter1();
console.log(increment());