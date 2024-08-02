// reverse integer

function reverse(x) {
    let rev = 0
    while (x != 0) {
        let remainder = x % 10
        x = parseInt(x / 10)
        rev = rev * 10 + remainder
    }
    return rev
}

console.log(reverse(210))

function reverseInterger(x) {
    x = parseInt(x.toString().split('').reverse().join(''))
    return x
}

console.log(reverseInterger(210));


// answer of 1534236469 should be zero

function reverseInterger1(x) {
    x = parseInt(x.toString().split('').reverse().join(''))
    if (x > 2 ** 31 - 1 || x < -(2 ** 31)) {
        return 0
    }
    return x
}

console.log(reverseInterger1(210));

let reverse1 = function (x) {
    const isNagitive = x < 0;
    let reverseStr = Math.abs(x).toString().split('').reverse().join('')
    let reverseInt = parseInt(reverseStr)
    if (isNagitive) {
        reverseInt = -reverseInt
    }
    if (reverseInt > 2 ** 31 - 1 || reverseInt < -(2 ** 31)) {
        return 0
    }

    return reverseInt
};

console.log(reverse1(210));