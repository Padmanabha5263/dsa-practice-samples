# Linked List Data Structure

## Introduction

A **Linked List** is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory allocation, making them dynamic in size.

### Key Characteristics
- **Dynamic Size**: Can grow or shrink during runtime.
- **Non-contiguous Memory**: Nodes can be scattered in memory.
- **Sequential Access**: Elements are accessed sequentially, not randomly.

## Types of Linked Lists

### 1. Singly Linked List
Each node contains data and a reference (pointer) to the next node. The last node points to `null`.

### 2. Doubly Linked List
Each node contains data, a reference to the next node, and a reference to the previous node.

### 3. Circular Linked List
The last node points back to the first node, forming a circle. Can be singly or doubly circular.

## Basic Structure

### Node
A node in a linked list typically consists of:
- **Data**: The value stored in the node.
- **Next**: Reference to the next node (and previous for doubly linked lists).

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

## Operations

### 1. Insertion
- **At the Beginning (Prepend)**: Add a new node before the current head.
- **At the End (Append)**: Add a new node after the last node.
- **At a Specific Position**: Insert at a given index.

### 2. Deletion
- **From the Beginning**: Remove the head node.
- **From the End**: Remove the last node.
- **At a Specific Position**: Remove node at a given index.

### 3. Traversal
Iterate through the list from head to tail.

### 4. Search
Find a node with a specific value.

### 5. Size and Empty Check
- `getSize()`: Returns the number of nodes.
- `isEmpty()`: Checks if the list is empty.

## Implementation Overview

The provided implementation (`LinkedList.mjs`) demonstrates a basic singly linked list with the following methods:

- `isEmpty()`: Returns true if the list has no nodes.
- `getSize()`: Returns the current size of the list.
- `prepend(value)`: Adds a new node at the beginning.
- `append(value)`: Adds a new node at the end.
- `print()`: Returns a string representation of the list.

### Example Usage
```javascript
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.print()); // Output: "5 10 20"
console.log(list.getSize()); // Output: 3
```

## Time Complexity

| Operation | Time Complexity |
|-----------|-----------------|
| Prepend   | O(1)           |
| Append    | O(n)           |
| Insert at Position | O(n)      |
| Delete from Beginning | O(1)    |
| Delete from End | O(n)        |
| Search    | O(n)           |
| Access by Index | O(n)       |

## Advantages

- **Dynamic Size**: No need to specify size in advance.
- **Efficient Insertions/Deletions**: Especially at the beginning.
- **Memory Efficient**: Only allocates memory when needed.

## Disadvantages

- **Sequential Access**: No random access; must traverse from head.
- **Extra Memory**: Each node requires space for the pointer(s).
- **Cache Unfriendly**: Nodes may not be contiguous in memory.

## Applications

- **Dynamic Memory Allocation**: When size is unknown.
- **Implementation of Other Data Structures**: Stacks, queues, graphs.
- **Music Players**: Playlist management.
- **Undo Functionality**: In applications like text editors.

## Comparison with Arrays

| Aspect | Linked List | Array |
|--------|-------------|-------|
| Size | Dynamic | Fixed/Static |
| Access | Sequential | Random |
| Insertion/Deletion | Efficient (O(1) at ends) | Inefficient (O(n)) |
| Memory | Non-contiguous | Contiguous |
| Cache Performance | Poor | Good |

## Conclusion

Linked lists are fundamental data structures that offer flexibility in dynamic scenarios. Understanding their operations and trade-offs is crucial for choosing the right data structure for specific use cases. The implementation provided serves as a starting point for exploring more advanced linked list operations.</content>
<parameter name="filePath">e:\workspace\nodejs\dsa-practice-samples\linkedlist\linkedlist.md
