// basic regular expressions

const str =  "JavaScript is a versatile language. JavaScript frameworks are popular.";
const regex = /JavaScript/g;
const found = str.match(regex);
console.log(found);

const text = "There are 123 apples and 456 oranges.";
const regex2 = /([a-z])\w+/g;
const found2 = text.match(regex2);
console.log(found2);