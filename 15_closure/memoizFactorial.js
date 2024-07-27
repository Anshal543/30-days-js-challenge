// create a memoized version of a function that calculates the factorial of a number
function memoizeFactorial(){
    const cache = {};
    return function factorial(n){
        if(n<=1)return 1;
        if(cache[n]){
            console.log('Fetching from cache');
            return cache[n];
        } else {
            const result = n * factorial(n-1);
            cache[n] = result;
            return result;
    }}
}

const factorial = memoizeFactorial();
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(4));