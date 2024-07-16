// action: 1. Create a for loop that prints numbers from 0 to 9
// task: 1. Create a for loop that prints numbers from 0 to 9
let result = "";
for (let index = 0; index < 10; index++) {
    result += index + " ";
}
console.log(result);

// task 2
for (let index = 1; index <= 10; index++) {
    console.log(`${5} X ${index} = ${5 * index}`);

}

// activity 2

// while loop task 3

let i = 1;
let result1 = 0
while (i <= 10) {
    result1 = result1 + i
    i++;
}
console.log(result1);

// task 4

let descendingNumber = 10;
let desNumResult = "";
while (descendingNumber >= 0) {
    desNumResult += descendingNumber + " ";
    descendingNumber--;
}
console.log(desNumResult);

// activity 3 do while loop

// task 5

let j = 1;
let result2 = "";
do {
    result2 += j + " ";
    j++;
}
while (j <= 5);
console.log(result2);

// task 6 factorial of number

let number = 5;
let factorial = 1;
do {
    factorial = factorial * number;
    number--;
}
while (number > 1);
console.log(factorial);

// activity 4
// nested looops

// task 7

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "* ";
    
    }
    console.log(row);
    
}

// activity 5 loop control statements

// task 8

for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

// task 9

for (let i = 1; i <= 10; i++) {
    if(i === 7){
        break;
    }
    console.log(i);
    
}