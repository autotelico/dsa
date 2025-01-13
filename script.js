class LinkedList {
    constructor(root) {
        this.root = root;
    }

    toString() {
        let curNode = this.root;
        let result = '';
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

}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

const headNode = new Node(1, new Node(2, new Node(3)))
const ll = new LinkedList(headNode);

ll.append(new Node(4))

ll.toString();