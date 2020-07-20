# Question 

![alt text](../../assets/return-kth-to-last.png)

---
# What is a singly linked list?

> A data structure that holds a sequence of linked nodes

> Each step contains a message (eg. You've reached the Oakland) and a pointer to the next step(eg. visit these coordinates).

---
# Operations Of a Singly Linked List

### Since a singly-linked list contains nodes, which can be a separate constructor from a singly-linked list, we outline the operations of both constructors: Node and SinglyList.

## Node
- `data` stores a value
- `next` points to the next node in the list

## Singly List
- `_length` retrieves the number of nodes in a list
- `head` assigns a node as the head of a list
- `add(value)` adds a node to a list
-  `searchNodeAt(position)` searches for a node at n-position in our list

# Implementation Of A Singly-List List

[Check Out My Code](./index.js)

Each instance of the singly list will have two properties _length and head.
The former is assigned the number of nodes in a list
The latter points to the head of the -- the node at the front of the list
Default is set at (head = null; __length = 0;)

````Javascript
function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}
````

Each instance of SinglyList will have two properties: _length and head. The former is assigned the number of nodes in a list; the latter points to the head of the list—the node at the front of the list. Since every new instance of SinglyList does not contain a node, the default value of head is null and the default value of _length is 0.

````javascript
SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;
 
    // A empty list 
    if (!currentNode) {
        this.head = node;
        this._length++;
         
        return node;
    }
 
    // A non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this._length++;
     
    return node;
};
````
We use the argument of add(value) to create a new instance of a Node assigned to a variable named node. 
We also declare a variable named currentNode and initialize it to the _head of our list. If there are no nodes in the list, then the value of head is null. 

````javascript
SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // An invalid position 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // An valid position 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};
````
The if statement checks for the first use case: an invalid position is passed as an argument.

If the index passed to searchNodeAt(position) is valid, then we reach the second use case—the while loop. During each iteration of the while loop, currentNode—which first points to head—is reassigned to the next node in the list. This iteration continues until count is equal to position. 

When the loop finally breaks, currentNode is returned. 

````javascript
SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // An invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // The first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // Any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }
 
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
};
````

---
### References
[Data Structure with Javascript](https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392)

