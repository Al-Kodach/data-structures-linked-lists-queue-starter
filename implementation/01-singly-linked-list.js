// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
        // Write your hypothesis on the time complexity of this method here
        /*
            visitiong each method in is O(1) constant
            adding value to head is O(1), does not reqiure to visit any node
        */
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        /*
            time complexity is O(n) since we have to visit each node to find the last node
        */

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        // if head is empty we set to head and return
        if (!this.head) {
            this.head = newNode;
            this.length++;
        } else {

            // traverse each node to find the first node which is the last
            let curr = this.head;
            while (curr) {

                if (!curr.next) {
                    curr.next = newNode;
                    this.length++
                    return this;
                }
                curr = curr.next;
            }
        }


        return this;
    }

    removeFromHead() {
        // Remove node at head
        const head = this.head;

        if (this.head) {
            this.head = this.head.next || null;
            this.length--;
            return head;
        }

        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(1);
    }

    removeFromTail() {
        // Remove node at tail
        let tail;

        if (this.head) {

            if (this.length === 1) {
                tail = this.head;
                this.head = null;
            } else {
                let penultimate = this.head;

                for (let i = 1; i < this.length - 1; i++) {
                    penultimate = penultimate.next;
                }

                tail = penultimate.next;
                penultimate.next = null;
            }

            this.length--;
            return tail;
        }

        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(1);

    }

    peekAtHead() {
        // Return value of head node
        return this.head ? this.head.value : undefined;

        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(1);


    }

    print() {
        // Print out the linked list
        let cur = this.head;

        while (cur) {
            console.log(cur.value);
            cur = cur.next;
        }

        // Write your hypothesis on the time complexity of this method here
        // visited every every node in the list is O(1), hence tiem complexity is O(1);
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
