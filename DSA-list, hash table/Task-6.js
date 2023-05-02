//Create a Doubly Linked List and write algorithm to delete duplicates in the list

class List {
    constructor(val) {
        this.data = val;
        this.pre = null;
        this.next = null;
    }
}

//adding data
function add(head, data) {
    let newList = new List(data);
    newList.pre = null;
    newList.next = head;

    if (head != null) {
        head.pre = newList;
    }
    head = newList;
    return head;
}

//deleting the list
function deleteList(head, del) {
    if (head == null || del == null) {
        return;
    }
    if (head == del) {
        head = del.next;
    }
    if (del.next != null) {
        del.next.pre = del.pre;
    }
    if (del.pre != null) {
        del.pre.next = del.next;
    }
}

//Removing duplicate
function removeDuplicate(head) {
    if (head == null) {
        return;
    }

    let current = head;
    while (current.next != null) {
        if (current.data == current.next.data) {
            deleteList(head, current.next)
        }
        else {
            current = current.next;
        }
    }
}

//printing list
function print(head) {
    if (head == null)
        console.log("Empty List");
    else {
        while (head != null) {
            console.log(head.data + " ");
            head = head.next;
        }
    }
}

let head = null;
head = add(head, 10);
head = add(head, 12);
head = add(head, 20);
head = add(head, 10);
head = add(head, 6);
head = add(head, 6);

// print(head);
removeDuplicate(head);
print(head);

//time complexity : O(n)



