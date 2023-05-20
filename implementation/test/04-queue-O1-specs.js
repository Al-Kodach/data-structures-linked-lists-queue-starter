const { Queue } = require('../03-queue.js');
const { expect } = require('chai');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('Queue Behavior', function() {
    it('Should enqueue and dequeue in O(1) time', function() {
      let timeout = 100;

      const startTime = Date.now();
      let q = new Queue();

      for (let i = 0 ; i < 50000 ; i++) {
          q.enqueue(i);
      }

      for (let i = 0 ; i < 50000 ; i++) {
          q.dequeue();
      }

      expect(Date.now() - startTime < timeout).to.be.true;
    });
  });
});
 
/* 
Queue {
  head: SinglyLinkedNode {
    value: 'A',
    next: SinglyLinkedNode { value: 'B', next: [SinglyLinkedNode] }
  },
  tail: SinglyLinkedNode { value: 'C', next: null },
  length: 3
}


  Queue
    Queue Behavior
      ✔ Should enqueue and dequeue in O(1) time


  1 passing (22ms)
*/