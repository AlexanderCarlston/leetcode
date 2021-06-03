# Linked List

## Key Details

* Linear Data Structure

* Entry point is called the head

* End is the tail

* Node Based

## Advantages

* Nodes can be easily removed or added from a linked list, 


## Methods

* size()

```
size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
```

* clear()

```
clear() {
    this.head = null;
}
```

* getLast()

```
getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}
```

* getFirst()

```
getFirst() {
    return this.head;
}
```
## Types

* Singly Linked

Each node points to a single node (one after other, and last points to null)

* Double Linked

Each node points to a previous, and the next node.

* Circular Linked

Tail node links to head node, creating circular linked.

## My Favorite Resources

* https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
