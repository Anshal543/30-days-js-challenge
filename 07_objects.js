// Activity 1 object creation and access
// task 1
let books = {
    title: 'The Power of Habit',
    auther: 'Charles Duhigg',
    year: 2012,
}
console.log(books);
// task 2
console.log('auther is ' + books.auther, "title is " + books.title);
//activity 2 object methods
// task 3
books.func = function(){
    return this.title + ' was written by ' + this.auther;
}
console.log(books.func());
// task 4
books.updateYear = function(year){
    return this.year = year;
}
console.log(books.updateYear(2014));
// activity 3 nested objects
// task 5
let library = {
    name: 'Central Library',
    books:[
        {
            title: 'The Power of Habit',
            auther: 'Charles Duhigg',
            year: 2012,
        },
        {
            title: 'Mindset: The New Psychology of Success',
            auther: 'Carol S. Dweck',
            year: 2006,
        },
        {
            title: 'The Lean Startup',
            auther: 'Eric Ries',
            year: 2011,
        }
    ]
}
console.log(library);
// task 6
console.log(library.name);
library.books.forEach((book)=>{
    console.log(book.title);
})
// actitity 5 object iteration
// task 7
let book = {
    title: 'The Power of Habit',
    auther: 'Charles Duhigg',
    year: 2012,

}
for (let key in book){
    console.log(key,book[key]);
}
// task 8
let keys = Object.keys(book);
let values = Object.values(book);
console.log(keys);
console.log(values);