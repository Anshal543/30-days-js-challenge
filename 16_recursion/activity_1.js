// basic recursion

function Factorial(n){
    if (n==0){
        return 1;
    }
    return n*Factorial(n-1);
}

const result = Factorial(3);
// console.log(result);


function fibonaci(n){
    if (n==0){
        return 0;
    }
    if (n==1){
        return 1;
    }
    return fibonaci(n-1)+fibonaci(n-2);
}
console.log(fibonaci(5));
console.log(fibonaci(3));
console.log(fibonaci(2));