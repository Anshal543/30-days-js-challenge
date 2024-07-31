// character classes and quantifiers

let text = "This is a Test. Hello World! 421";
let regex = /[A-Z]\w+/g;
let matches = text.match(regex);
console.log(matches);


let text1 = "123 apples, 456 oranges , and 789 bananas.";
let regex1 = /\d+/g;
let matches1 = text1.match(regex1);
console.log(matches1);