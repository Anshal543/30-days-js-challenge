// grouping and capturing
let text = "(123) 456-7890";
let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let matches = text.match(regex);
// console.log(matches);

let text1 = "example@example.com";
let regex1 =  /(?<local>\w+)@(?<domain>\w+\.\w+)/;
let matches1 = text1.match(regex1);
console.log(matches1);