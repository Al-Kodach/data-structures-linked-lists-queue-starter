// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        // if head is empty, assign newNode to tail and head
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        // if head is not empty
        // assign new to head previous node
        // link newNode to head and place newNode at head

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        // time coplexity is O(1)
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        // head is empty, assign newNode to tail and head.
        // increment length and return
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        // if head is not empty, newnode prev node becomes tail 
        // link newNode to tail and place newNode at tail
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // time coplexity is O(1)
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return;

        let head = this.head // head is not empty
        // head is linked
        if (this.head.next) { // disconnect prevoius and next link 
            this.head.next.prev = null;
            this.head = this.head.next;
        } else {
            // assign the next link or null if it's the last node in the list
            this.head = null;
        }

        this.length--; // decrement and return the value.
        return head.value;

        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) return;

        let tail = this.tail;

        if (this.tail.prev) { // disconnect link 
            this.tail = this.tail.prev
            this.tail.next = null;
        } else {
            this.tail = null;
        }

        this.length--;
        return tail.value;
        // Write your hypothesis on the time complexity of this method here
        // time coplexity is O(1)

    }

    peekAtHead() {
        // Return value of head node
        return this.head ? this.head.value : undefined;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        return this.tail ? this.tail.value : undefined;
        // Write your hypothesis on the time complexity of this method here
    }
}
let list = new DoublyLinkedList();

list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToHead(4);
// console.log(list , '\n');

list.removeFromHead();
list.removeFromHead();


console.log('\n');
console.log(list, '\n');
// console.log(result);


module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
