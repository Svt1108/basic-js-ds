const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode == null) {
      this.rootNode = newNode;
    } else {
      let link = this.rootNode;
      while (1) {
        if (newNode.data == link.data) return;
        if (newNode.data < link.data) {
          if (link.left == null) {
            link.left = newNode;
            return;
          } else link = link.left;
        }
        if (newNode.data > link.data) {
          if (link.right == null) {
            link.right = newNode;
            return;
          } else link = link.right;
        }
      }
    }
  }

  has(data) {
    let linkRoot = this.rootNode;
    let flag = this.lookFor(linkRoot, data);
    if (flag === null) return false;
    else return true;
  }

  lookFor(link, data) {
    if (data < link.data) {
      if (link.left == null) return null;
      else return this.lookFor(link.left, data);
    } else if (data > link.data) {
      if (link.right == null) return null;
      else return this.lookFor(link.right, data);
    } else {
      return link;
    }
  }

  find(data) {
    let linkRoot = this.rootNode;
    return this.lookFor(linkRoot, data);
  }

  lookForRemove(link, data) {
    if (link === 0) return null;
    if (data < link.data) {
      link.left = this.lookForRemove(link.left, data);
      return link;
    } else if (data > link.data) {
      link.right = this.lookForRemove(link.right, data);
      return link;
    } else {
      if (link.left === null && link.right === null) {
        link.data = null;
        link = null;
        return;
      }
      if (!link.left) {
        link = link.right;
        return link;
      }
      if (!link.right) {
        link = link.left;
        return link;
      }

      let linkRoot = link.right;
      let minData = this.lookMin(linkRoot);

      link.data = minData;
      link.right = this.lookForRemove(link.right, minData);
      return link;
    }
  }

  remove(data) {
    this.rootNode = this.lookForRemove(this.rootNode, data);
  }

  min() {
    if (this.rootNode.left == null && this.rootNode.right == null) return null;
    let linkRoot = this.rootNode;
    return this.lookMin(linkRoot);
  }

  lookMin(link) {
    if (link.left == null) return link.data;
    else return this.lookMin(link.left);
  }

  max() {
    if (this.rootNode.left == null && this.rootNode.right == null) return null;
    let linkRoot = this.rootNode;
    return this.lookMax(linkRoot);
  }

  lookMax(link) {
    if (link.right == null) return link.data;
    else return this.lookMax(link.right);
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();
tree.add(4);
tree.add(1);
tree.add(3);
tree.add(2);
tree.add(5);
tree.add(6);
tree.add(11);
tree.add(8);
tree.add(7);
tree.add(9);
tree.remove(7);
tree.remove(8);
tree.remove(2);
tree.remove(3);
console.log(tree.has(7));
console.log(tree.has(8));
console.log(tree.has(2));
console.log(tree.has(3));
