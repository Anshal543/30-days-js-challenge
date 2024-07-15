// Activity 1

// task 1

let num = -10;
if (num > 0) {
    console.log("Positive");
}else{
    console.log("negative");
}

// task 2

let age = 18;

if (age >= 18) {
    console.log("eligble for vote");
}else {
    console.log("not eligble for vote");
}

// activity 2

// task 1

let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 >num2){
    if (num1 > num3){
        console.log(num1);
    }else{
        console.log(num3);
    }
} else {
    if (num2 > num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}

// activity 3

// task 1

let day = 10; 

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid day");
        break;

}

// task 2

let score = 60;

switch (score){
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 50:
        console.log("E");
        break;
    default:
        console.log("F");
        break;

}

// activity 4

// task 1

let checkEvenOdd = 10;

checkEvenOdd % 2 == 0 ? console.log("Even") : console.log("Odd");

// activity 5

// task 1
// check leap year

let year = 1900;

// if (year % 4 == 0){
//     if(year % 400==0){
//         console.log("leap year");
//     }
//     else{
//         console.log("not a leap year");
//     }
// }else {
//     console.log("not a leap year");
// }

if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("leap year");
}
else{
    console.log("not a leap year");
}