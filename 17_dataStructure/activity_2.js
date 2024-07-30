// stack
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length === 0) {
            console.log('Stack is empty');
        }
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    display() {
        if (this.items.length === 0) {
            console.log('Stack is empty');
            return;
        }
        console.log(this.items);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();
console.log(stack.peek());
stack.pop();
stack.display();

function reverseString(str){
    let stack = new Stack();
    for (const char of str) {
        stack.push(char);
    }
    let reversedString = '';
    while(stack.items.length>0){
        reversedString += stack.pop();
    }
    return reversedString;
}

console.log(reverseString('hello'));