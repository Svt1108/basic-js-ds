const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const list = new LinkedList();
  for (let i = 0; i < l.length; i++) {
    list.addLast(l[i]);
  }
  list.delete(k);
  //  return l;
  return list.toArray();
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addLast(value) {
    let newNode = new ListNode(value);
    if (this.tail == null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  delete(value) {
    if (this.head == null) return null;
    else {
      let link = this.head;
      /* удаление совпадающих c k элементов из начала */
      while (link.value == value) {
        if (link.next == null) {
          this.head = null;
          this.tail = null;
          break;
        }
        this.head = this.head.next;
        link = this.head;
      }
      /* удаление совпадающих c k элементов из середины и из конца */
      let link2;
      if (link.next != null) {
        while (1) {
          link2 = link.next;
          if (link2.value == value) {
            link.next = link2.next;
          } else {
            link = link.next;
          }
          if (link.next == null) break;
        }
      }
    }
  }

  toArray() {
    let arr = [];
    if (this.head == null) return arr;
    else {
      let link = this.head;
      while (1) {
        arr.push(link.value);
        if (link.next == null) break;
        link = link.next;
      }
    }
    return arr;
  }
}

module.exports = {
  removeKFromList,
};

//console.log(removeKFromList([3, 1, 2, 5, 8, 3, 3, 6, 7, 3, 3, 3, 3, 3], 3));
console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));
console.log(removeKFromList([1, 2, 3, 3, 4, 5], 3));
console.log(removeKFromList([1, 2, 3], 3));
