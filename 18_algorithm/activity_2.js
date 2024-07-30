// searchiing algorithm
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}

// let array = [5, 3, 8, 4, 2]
// let target = 8
// let index = linearSearch(array, target)
// if (index !== -1) {
//     console.log(`Element found at index ${index}`);
// }
// else {
//     console.log('Element not found');
// }

function binarySearch(array, target){
    let left = 0
    let right = array.length - 1
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(array[mid] === target){
            return mid
        }
        if(array[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return -1
}

let array = [2, 3, 4, 5, 8]
let target = 8
let index = binarySearch(array, target)
if (index !== -1) {
    console.log(`Element found at index ${index}`);
}
else {
    console.log('Element not found');
}