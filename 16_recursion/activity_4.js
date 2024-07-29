// recursive search
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    if (start > end) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, end);
}


const arr = [4, 2, 5, 3, 7, 9, 5, 12, 1, 6, 4, 4, 4];
arr.sort((a, b) => a - b)
console.log(arr);
const targets = [1, 9, 12]
targets.forEach(target => {
    const targetIndex = binarySearch(arr, target, 0, arr.length - 1);
    console.log(`Target: ${target} found at index: ${targetIndex}`);
})

// function to count the occurence of target element in the array
const countOccurence = (arr, target, index = 0) => {
    if (index >= arr.length) {
        return 0;
    }
    const count = arr[index] === target ? 1 : 0;
    return count + countOccurence(arr, target, index + 1);
}

const target = 4;
const occurence = countOccurence(arr, target);
console.log(`Target: ${target} occured ${occurence} times in the array`);