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

        if (this.head) {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // time coplexity is O(1)
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // Write your hypothesis on the time complexity of this method here
        // time coplexity is O(1), since we only
        // 1, visit the tail which is O(1) 2, visit prev which is also O(1)
    }

    removeFromHead() {
        // Remove node at head
        thie.head = this.head.next || this.tail;
        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(1); we only replace head linked node to head and
        // the memory will get ride of the space occapied by head
    }

    removeFromTail() {
        // Remove node at tail
        this.prev.next = null;
        this.prev = this.prev.prev || null;
        this.tail = this.prev || null;
        // Write your hypothesis on the time complexity of this method here
        // time coplexity is O(1), since we only have

    }

    peekAtHead() {
        // Return value of head node
        return this.head.value || null;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        return this.tail.val || null;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
