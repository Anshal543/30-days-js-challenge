// recursion with arrays

let array1 = [1,2,3,77,4];
function sumOfArray(array){
    if (array.length==1){
        return array[0];
    }
    return array[0]+sumOfArray(array.slice(1));
}
// console.log(sumOfArray(array1));

function maxElement(array){
    if (array.length==1){
        return array[0];
    }
    return Math.max(array[0],maxElement(array.slice(1)));
}
// console.log(maxElement(array1));


const maxArray = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    else if (arr.length === 1) {
        return 0;
    }
    else {
        let maxofRest = maxArray(arr.slice(1));
        return arr[0] > maxofRest ? arr[0] : maxofRest;
    }
}

console.log(maxArray([1, 2, 34, 5, 6]));