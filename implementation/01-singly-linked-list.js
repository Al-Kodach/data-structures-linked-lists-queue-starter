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
        let node = new SinglyLinkedList(val);

        // add to head if head is empty and return
        if (!this.head) {
            this.head = node;
            this.length++;
            return;
        }

        // link new node to head and assign new node to head
        node.next = this.head;
        this.head = node;
        this.length++;

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
            return;
        }

        // traverse each node to find the first node which is the last
        let curr = this.head;
        while (curr) {

            if (!curr.next) {
                curr.next = newNode;
                this.length++
                return;
            }
            curr = curr.next;
        }
    }

    removeFromHead() {
        // Remove node at head
        if (this.head) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(1);
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return null;

        // tranverse each node to find the last
        let cur = this.head;
        while (cur) {
            // if curr is not linked, that is the last node
            if (!cur.next.next) {
                cur.next = null;
                this.length--;
                return;
            }
            cur = cur.next;
        }

        // Write your hypothesis on the time complexity of this method here
        // visiting each node in the link is O(n), time complexity in total is O(n)
    }

    peekAtHead() {
        // Return value of head node
        return this.head.val || null;
        // Write your hypothesis on the time complexity of this method here
        // visited only the first node, hence tiem complexity is O(1);
    }

    print() {
        // Print out the linked list
        let cur = this.head;

        while (cur) {
            console.stdout.write(`${cur.val} -> `);
            cur = cur.next;
        }

        console.log('Null');
        // Write your hypothesis on the time complexity of this method here
        // visited every every node in the list is O(1), hence tiem complexity is O(1);
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
