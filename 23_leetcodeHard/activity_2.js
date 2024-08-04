// merge k sorted lists

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoList(list1, list2) {
    let dummy = new ListNode(-1);
    let head = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            head.next = list1;
            list1 = list1.next;
        } else {
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }
    if (list1) {
        head.next = list1;
    }
    if (list2) {
        head.next = list2;
    }
    return dummy.next;
}

function mergeKLists(lists) {
    if (lists.length === 0) {
        return null;
    }
    let result = lists[0];
    for (let i = 1; i < lists.length; i++) {
        result = mergeTwoList(result, lists[i]);
    }
    return result;
}

function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join('->'));
}

function createList(arr) {
    let dummy = new ListNode(-1);
    let head = dummy;
    for (let i = 0; i < arr.length; i++) {
        head.next = new ListNode(arr[i]);
        head = head.next;
    }
    return dummy.next;
}

const List = [
    createList([1, 4, 5]),
    createList([1, 3, 4]),
    createList([2, 6])
]

const result = mergeKLists(List);
printList(result); // 1->1->2->3->4->4->5->6
