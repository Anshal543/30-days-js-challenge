// assertions and boundaries
let text = "Hello, this is a test.";
let regex = /^\b\w+/;
let matches = text.match(regex);
console.log(matches);

let text1 = "The end";
let regex1 = /\b\w+\b$/;
let matches1 = text1.match(regex1);

console.log(matches1); // Output: ["end"]
