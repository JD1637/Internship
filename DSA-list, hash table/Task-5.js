//Design a Cashier class that takes in a customer and handles the order on First come, first serve basis

class cashier {
    constructor() {
        this.items = [];
        this.frontIndex = 0;
        this.backIndex = 0;
    }
    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
        return item + ' no. order is confirmed';
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item + ' no. order is delivered';
    }
    peek() {
        return this.items[this.frontIndex] + ' no. order is goining to serve next';
    }
}
const Cashier = new cashier()
console.log(Cashier.enqueue(7))  //inserting first item
console.log(Cashier.enqueue(2))  //inserting second item
console.log(Cashier.enqueue(6))
console.log(Cashier.enqueue(4))
console.log(Cashier.enqueue(9))
console.log(Cashier.dequeue())  //deleting first item
console.log(Cashier.dequeue())
console.log(Cashier.dequeue());
console.log(Cashier.peek())
console.log(Cashier.enqueue(19))
console.log(Cashier.enqueue(4))

// console.log(Cashier.items);

//time complexity : O(1)
