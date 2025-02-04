class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class HashMap {
    constructor(capacity, loadFactor) {
        this.getCapacity = () => capacity;
        this.getLoadFactor = () => loadFactor;
        this.bucketList = new Array(capacity).fill(null);
    }

    shouldGrow() {
        const threshold = this.bucketList.length * this.getLoadFactor();        
        const filledBuckets = this.bucketList.filter(Boolean).length;
        if (threshold < filledBuckets) {
            console.log('should Grow');
            
        }
    }

    insert(value) {
        // Hash the string
        let hashCode = 0;
        const prime = 31;
        for (let i = value.length - 1; i >= 0; i--) {
            hashCode += prime * hashCode + value.charCodeAt(i);
        }
        
        // Insert it into a bucket
        const bucketIndex = hashCode % this.getCapacity();
        const valueAtBucket = this.bucketList[bucketIndex];
        if (valueAtBucket) {
            let currentNode = this.bucketList[bucketIndex];
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value);
        } else {
            this.bucketList[bucketIndex] = new Node(value);
        }
        this.shouldGrow()
    }
}

const hm = new HashMap(16, 0.75);
console.log(hm.bucketList);
hm.insert('Fred');
hm.insert('Dennis');
hm.insert('a');
hm.insert('b');
hm.insert('c');
hm.insert('d');
hm.insert('e');
hm.insert('f');
hm.insert('h');
hm.insert('i');
hm.insert('j');
hm.insert('g');
console.log(hm.bucketList);

