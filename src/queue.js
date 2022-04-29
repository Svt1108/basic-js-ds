const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getUnderlyingList() {
    return this.head;
    // if (this.head == null) return null;
    // else {
    //   let link = this.head;
    //   console.log(link);
    //   while (1) {
    //     if (link.next == null) break;
    //     link = link.next;
    //   }
    // }
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (this.tail == null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head == null) return;
    else {
      let link = this.head;
      this.head = this.head.next;
      return link.value;
    }
  }
}

module.exports = {
  Queue,
};

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue());
