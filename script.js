class LinkedList {
  constructor(root) {
    this.root = root;
  }

  toString() {
    let curNode = this.root;
    let result = "";
    while (curNode.next !== null) {
      result += `( ${curNode.value} ) -> `;
      curNode = curNode.next;
    }
    result += `( ${curNode.value} )`;
    console.log(result);
  }

  append(value) {
    let curNode = this.root;
    while (curNode.next !== null) {
      curNode = curNode.next;
    }
    curNode.next = value;
  }

  prepend(value) {
    const nextValue = this.root;
    this.root = value;
    this.root.next = nextValue;
  }

  size() {
    let size = 1;
    let curNode = this.root;
    while (curNode.next !== null) {
      size++;
      curNode = curNode.next;
    }
    return size;
  }

  head() {
    return this.root;
  }

  tail() {
    let curNode = this.root;
    while (curNode.next !== null) {
      curNode = curNode.next;
    }
    return curNode;
  }

  at(index) {
    let curIndex = 0;
    let curNode = this.root;
    while (curNode.next !== null && curIndex !== index) {
      curIndex++;
      curNode = curNode.next;
    }
    if (curIndex < index) {
      throw new Error("Given index is greater than the list's length");
    }
    return curNode;
  }

  pop() {
    let curNode = this.root;
    while (curNode.next.next !== null) {
      curNode = curNode.next;
    }
    const result = curNode.next;
    curNode.next = null;
    return result;
  }

  contains(value) {
    let curNode = this.root;
    while (curNode.next !== null) {
        if (curNode.value === value) return true
        curNode = curNode.next;
    }
    return false;
  }

  find(value) {
    let curNode = this.root;
    while (curNode.next !== null) {
        if (curNode.value === value) return curNode;
        curNode = curNode.next;
    }
    return null;
  }

  insertAt(index, value) {
    let curIndex = 1;
    if (index < 0) {
      throw new Error("Cannot insert value at negative index");
    }
    if (index === 0) {
      let temp = this.root;
      this.root = value;
      value.next = temp;
      return;
    }
    let curNode = this.root;
    while (curNode.next !== null && curIndex !== index) {
      curNode = curNode.next;
      curIndex++;
    }
    if (index > curIndex) {
      throw new Error("Cannot insert value at index beyond the list's length");
    }
    const nextRef = curNode.next;
    curNode.next = value;
    value.next = nextRef;
  }

  removeAt(index) {
    let curNode = this.root;
    let curIndex = 0;
    let prev;
    if (index < 0) {
        throw new Error('Cannot remove at negative index')
    }
    if (index === 0) {
      this.root = this.root.next;
      return;
    }
    while (curNode.next.next !== null && curIndex !== index) {
      prev = curNode;
      curNode = curNode.next;
      curIndex++;
    }
    if (curIndex !== index) {
      return -1;
    }
    prev.next = prev.next.next;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const headNode = new Node(1, new Node(2, new Node(3)));
const ll = new LinkedList(headNode);

ll.append(new Node(4));

ll.prepend(new Node(0));

// ll.insertAt(5, new Node("potato"));
ll.removeAt(1);
console.log(ll.find(3));

ll.toString();
