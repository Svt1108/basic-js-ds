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
  let value = k;
  let head = l;
  let tail = l;
  let linkl = head;

  while (1) {
    if (linkl.next == null) break;
    linkl = linkl.next;
  }

  tail = linkl;

  if (head == null) return null;
  else {
    let link = head;
    /* удаление совпадающих c k элементов из начала */
    while (link.value == value) {
      if (link.next == null) {
        head = null;
        tail = null;
        break;
      }
      head = head.next;
      link = head;
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

  l = head;
  return l;
}

module.exports = {
  removeKFromList,
};

//console.log(removeKFromList([3, 1, 2, 5, 8, 3, 3, 6, 7, 3, 3, 3, 3, 3], 3));
console.log(removeKFromList(convertArrayToList([3, 1, 2, 3, 4, 5]), 3));
//console.log(removeKFromList([1, 2, 3, 3, 4, 5], 3));
//console.log(removeKFromList([1, 2, 3], 3));

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}
