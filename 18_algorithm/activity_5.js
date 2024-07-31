// dynamic programming
function fibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

// console.log(fibonacci(3)); 

function knapSack(values, weights, capacity) {
    let n = values.length;
    let dp = Array.from(Array(n + 1), () => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

let values = [60, 100, 120, 200];
let weights = [1, 2, 3, 3];
let capacity = 5;
let maxValue = knapSack(values, weights, capacity);
console.log("Maximum value that can be obtained:", maxValue);
