function add(x, y) {
  return x + y;
}

function memoize(fn){
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        console.log(key);
        if(cache[key]){
            console.log('Fetching from cache');
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    }
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // Fetching from cache, 3
console.log(memoizedAdd(2, 3)); // 5
console.log(memoizedAdd(2, 3)); // Fetching from cache, 5