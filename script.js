class LinkedList {
    constructor(listArr = []) {
      this.listArr = listArr;
    }
    append(value) {
      this.listArr.push(value);
      this.refreshNodesPointers();
    }
    prepend(value) {
      this.listArr.unshift(new Node(value));
      this.refreshNodesPointers();
    }
    size() {
      return this.listArr.length;
    }
    head() {
      return this.listArr[0];
    }
    tail() {
      return this.listArr[this.listArr.length - 1];
    }
    at(index) {
      return this.listArr[index];
    }
    pop() {
      this.listArr.pop();
      this.refreshNodesPointers();
    }
    contains(value) {
      return this.listArr.includes(value);
    }
    find(value) {
      if (this.listArr.indexOf(value) === -1) return null;
      return this.listArr.indexOf(value);
    }
    toString() {
      let string = "";
      this.listArr.forEach((value) => {
        if (value === this.listArr[this.listArr.length - 1]) {
          string += `(${value}) -> null`;
          return string;
        }
        string += `(${value}) -> `;
      });
      return string;
    }
    insertAt(value, index) {
      this.listArr.splice(this.listArr[index], 0, value);
    }
    removeAt(index) {
      this.listArr.splice(this.listArr[index + 1], 1);
    }
    refreshNodesPointers() {
      this.listArr.forEach((node) => {
        if (this.listArr[this.listArr.indexOf(node) + 1]) { 
          node.nextNode = this.listArr[this.listArr.indexOf(node) + 1];
        } else {
          node.nextNode = null;
        }
      });
    }
  }
  
  class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
  this.nextNode = nextNode;
    }
  }
  
  const node3 = new Node('How about a third cool node?')
  const node2 = new Node("I'm the second cool node", node3)
  const node1 = new Node('I\'m a cool node', node2)
  
  const myArr = new LinkedList([node1, node2, node3])
  
  // testing time!
  myArr.prepend('hey')
  console.log(myArr)