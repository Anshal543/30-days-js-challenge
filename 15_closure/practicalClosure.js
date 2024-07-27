function uniqueId(){
    let id = 0;
    return function(){
        id++;
        let uniqueId = 'id' + id;
        return uniqueId;
    }
}
const myUniqueId = uniqueId();
console.log(myUniqueId());
console.log(myUniqueId());
console.log(myUniqueId());

// task 4
function getName(name){
    return function(){
        return `My name is ${name}`;
    }
}
const myName = getName('John');
console.log(myName());