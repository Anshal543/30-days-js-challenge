class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const task1 = new Node("wakeup in the morning");
const task2 = new Node("brush your teeth");
const task3 = new Node("take a shower");

task1.next = task2;
task2.next = task3;

function printLinkedList(node) {
    let current = node;
    while (current !== null) {
        console.log(current.value);
        current = current.next
    }
}

// printLinkedList(task1);

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (!this.head) {
            console.log('list is empty');
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    display() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }

        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add('wakeup in the morning');
list.add('brush your teeth');
list.add('take a shower');
list.display();
list.remove();
list.display();
