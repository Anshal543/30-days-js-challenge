// merge two sorted list

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

function mergeTwoLists(l1, l2) {
    let head = new ListNode();
    let current = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;
    return head.next;
}

function listToarray(list) {
    let result = [];
    let current = list;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

console.log(listToarray(mergeTwoLists(list1, list2)));