// array algorithm

function rotateArray(array, k) {
    let n = array.length;
    k = k % n;
    const rotatedArray = array.slice(-k).concat(array.slice(0, -k));
    return rotatedArray;
}

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); 


function mergeTwoSortedArray(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    // while (i < arr1.length) {
    //     result.push(arr1[i]);
    //     i++;
    // }
    // while (j < arr2.length) {
    //     result.push(arr2[j]);
    //     j++;
    // }
    result = result.concat(arr1.slice(i)).concat(arr2.slice(j));
    return result;
}

console.log(mergeTwoSortedArray([1, 3, 5, 7], [2, 4, 6, 8, 9]));

