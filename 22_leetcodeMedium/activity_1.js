// add two number
class LinkedList {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummyHead = new LinkedList();
    let current = dummyHead;

    while (l1 || l2) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new LinkedList(sum % 10);
        current = current.next;
    }
    if (carry > 0) {
        current.next = new LinkedList(carry);
    }
    return dummyHead.next;
}

let l1 = new LinkedList(2);
l1.next = new LinkedList(4);
l1.next.next = new LinkedList(3);

let l2 = new LinkedList(5);
l2.next = new LinkedList(6);
l2.next.next = new LinkedList(4);

function printLinkedList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}


printLinkedList(addTwoNumbers(l1, l2)); // [7, 0, 8]