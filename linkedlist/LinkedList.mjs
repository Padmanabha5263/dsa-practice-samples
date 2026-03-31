// node class to create the linkedlist node
class Node {
    constructor(value) {
        this.value = value;   // to store the value part in the node
        this.next = null;     // store reference of the next node
    }
}


// linked list class used to create linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    // returns true if linked list is empty
    isEmpty() {
        return this.size === 0;
    }

    // returns the size of the linked list
    getSize() {
        return this.size;
    }

    // adds a new node with the given value at the beginning of the linked list
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;                       //linkedlist is empty then head will refer to the new node
        }
        else {
            node.next = this.head;                  // if linkedlist is not empty[already nodes with data are there] then new node will refer to the head node
            this.head = node
        }
        this.size++;
    }

    // prints the linked list
    print() {
        if (this.isEmpty()) {
            console.log("linked list is empty");
        }
        else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            return listValues;
        }
    }

    // add the nodes at end of the linked list
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++;
    }
}

const llist = new LinkedList()
llist.prepend(10)
llist.prepend(20)
llist.prepend(30)
llist.append(30)
console.log(`the linked list size ${llist.getSize()}`);
console.log(`is linkedlist is empty ${llist.isEmpty()}`)
console.log(`linked list: ${llist.print()}`);