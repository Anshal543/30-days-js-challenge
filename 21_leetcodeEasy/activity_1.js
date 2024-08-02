// two sum

function twoSum(array, target) {
    let map = {};
    for (let i = 0; i < array.length; i++) {
        let diff = target - array[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[array[i]] = i;
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

function twoSumWithMap(array, target) {  // map store element of array as key and index as value
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        let diff = target - array[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(array[i], i);
    }
    return [];
}

console.log(twoSumWithMap([2, 7, 11, 15], 17));