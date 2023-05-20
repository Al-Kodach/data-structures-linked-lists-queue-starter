// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        let length = 0;

        let cur = this.head;
        while (cur) {
            length++;
            cur = cur.next;
        }

        return length;
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        let sum = 0;
        let cur = this.head;

        while (cur) {
            sum += cur.value
            cur = cur.next;
        }

        return sum;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.listLength();
        //  return total / length;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let cur = this.head;

        for (let i = 0; i <= n; i++) {
            if (i === n) {
                break;
            }
            cur = cur.next;
        }

        return cur;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        let len = this.listLength(),
            mid;

        if (len % 2 === 0) {
            mid = Math.floor(len / 2) - 1;
        } else {
            mid = Math.ceil(len / 2) - 1;
        }

        return this.findNthNode(mid);
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let temp = new SinglyLinkedList();

        for (let i = this.listLength() - 1; i >= 0; i--) {
            let cur = this.findNthNode(i);
            temp.addToTail(cur.value);
        }

        return temp;
        // Write your hypothesis on the time complexity of this method here
        // O(n + n2) => O(n2)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let temp = new SinglyLinkedList();

        for (let i = this.listLength() - 1; i >= 0; i--) {
            let cur = this.findNthNode(i);
            temp.addToTail(cur.value);
        }

        this.head = temp.head
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n + n2) => O(n2)
    }
}


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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        let len = 0;
        let cur = this.head;

        while (cur) {
            len++;
            cur = cur.next;
        }

        const mid = len % 2 === 0 ? (len / 2) - 1 : Math.floor(len / 2);
        cur = this.head;

        for (let i = 1; i <= mid; i++) {
            cur = cur.next;
        }

        return cur;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new DoublyLinkedList();

        let cur = this.tail;

        while (cur) {
            newList.addToTail(cur.value)
            cur = cur.prev;
        }

        return newList;
        // Write your hypothesis on the time complexity of this method here
        // O(n);
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let len = 0;
        let node1 = this.tail

        while (node1) {
            this.addToTail(node1.value);
            node1 = node1.prev;
            len++;
        }

        let node2 = this.head;

        for (let i = 0; i < len; i++) {
            const next = node2.next;

            node2.prev = null;
            node2.next = null;
            this.head = next;

            node2 = next;
        }

        this.head.prev = null;
        // Write your hypothesis on the time complexity of this method here
        // O(1);

    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
