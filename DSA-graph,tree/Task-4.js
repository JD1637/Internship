//Write a program to create LFU cache which stores the list of frequent visitors to any website.

class LFUNode {
    constructor(key, value) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.data = value;
        this.freqCount = 1;
    }
}

class LFUDoublyLinkedList {
    constructor() {
        this.head = new LFUNode('buffer head', null);
        this.tail = new LFUNode('buffer tail', null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    insertAtHead(node) {
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
        this.size++;
    }
    removeAtTail() {
        var oldTail = this.tail.prev;
        var prev = this.tail.prev;
        prev.prev.next = this.tail;
        this.tail.prev = prev.prev;
        this.size--;
        return oldTail;
    }
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }
}

class LFUCache {
    constructor(capacity) {
        this.keys = {}; // stores LFUNode
        this.freq = {}; // stores LFUDoublyLinkedList
        this.capacity = capacity;
        this.minFreq = 0;
        this.size = 0;
    }
    set(key, value) {
        var node = this.keys[key];

        if (node == undefined) {
            node = new LFUNode(key, value);

            this.keys[key] = node;

            if (this.size != this.capacity) {
                // insert without deleting
                if (this.freq[1] === undefined) {
                    this.freq[1] = new LFUDoublyLinkedList();
                }
                this.freq[1].insertAtHead(node);
                this.size++;
            } else {
                // delete and insert
                var oldTail = this.freq[this.minFreq].removeAtTail();
                delete this.keys[oldTail.key];

                if (this.freq[1] === undefined) {
                    this.freq[1] = new LFUDoublyLinkedList();
                }

                this.freq[1].insertAtHead(node);
            }
            this.minFreq = 1;
        } else {
            var oldFreqCount = node.freqCount;
            node.data = value;
            node.freqCount++;

            this.freq[oldFreqCount].removeNode(node);

            if (this.freq[node.freqCount] === undefined) {
                this.freq[node.freqCount] = new LFUDoublyLinkedList();
            }

            this.freq[node.freqCount].insertAtHead(node);

            if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).size == 0) {
                this.minFreq++;
            }

        }
    }
    get(key) {
        var node = this.keys[key];

        if (node == undefined) {
            return null;
        } else {

            var oldFreqCount = node.freqCount;
            node.freqCount++;

            this.freq[oldFreqCount].removeNode(node);

            if (this.freq[node.freqCount] === undefined) {
                this.freq[node.freqCount] = new LFUDoublyLinkedList();
            }

            this.freq[node.freqCount].insertAtHead(node);

            if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).length == 0) {
                this.minFreq++;
            }
            return node.data;
        }
    }
}

var myLFU = new LFUCache(3);
myLFU.set(1,1);
myLFU.set(2,2);
myLFU.set(3,3);
console.log(myLFU);
myLFU.set(4,4);
myLFU.set(5,5);
myLFU.get(3,3);
myLFU.set(6,6);
console.log(myLFU);


