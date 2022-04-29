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
      console.log(this.rootNode);
    }
    //    if (this.rootNode.data == newNode.data) return;
    else {
      let link = this.rootNode;
      //      console.log(newNode.data);
      // let i = 0;
      while (1) {
        if (newNode.data == link.data) return;
        if (newNode.data < link.data) {
          if (link.left == null) {
            link.left = newNode;
            //           console.log(link);
            return;
          } else link = link.left;
        }
        if (newNode.data > link.data) {
          if (link.right == null) {
            link.right = newNode;
            //           console.log(link);
            return;
          } else link = link.right;
        }
        // i++;
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();
tree.add(4);
console.log(tree.root());
tree.add(1);
tree.add(3);
//tree.add(4);
tree.add(2);
tree.add(5);
tree.add(6);
tree.add(0);
tree.add(8);
tree.add(7);
//console.log(tree.root());
// tree.root().data;
