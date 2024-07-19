// activity 1 array creation and access
// task 1
let num = [1,2,3,4,5]
console.log(num);
// task 2
console.log(num[0]);
console.log(num[4]);

// activity 2 array basics
// task 3
num.push(6);
console.log(num);
// task 4
num.pop();
console.log(num);
// task 5
num.unshift(0);
console.log(num);
// task 6
num.shift();
console.log(num);

// activity 3 array methods
// task 7
let doubleArray = num.map((n)=>{
    return n*2;
});
console.log(doubleArray);

// task 8
let OddArray = num.filter((n)=>{
    return n%2 !=0
})
console.log(OddArray);

// task 9
let sum = num.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(sum);

// activity 4 array iteration
// task 10
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    
}
// task 11
num.forEach((n)=>{
    console.log(n);
})

// activity 5 muitidimentional array
// task 12
let muitiArray = [[1,2,3],[4,5,6]]
console.log(muitiArray);
// task 13
console.log(muitiArray[0][1]);