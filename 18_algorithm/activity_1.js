// sorting algorithm

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([5, 3, 8, 4, 2]));

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }

        } if (minIndex !== i) {
            let temp = array[i]
            array[i] = array[minIndex]
            array[minIndex] = temp
        }

    } return array
}

// console.log(selectionSort([5, 3, 8, 4, 2]));


function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivot = array[array.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    const res = [...quickSort(left), pivot, ...quickSort(right)]
    console.log(res);
    return res
}

console.log(quickSort([5, 3, 8, 4, 2]));