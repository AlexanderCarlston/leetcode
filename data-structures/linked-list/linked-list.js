class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let headNode = new ListNode(2)
let node2 = new ListNode(5)
headNode.next = node2

let list = new LinkedList(headNode)

console.log(list.head.next.data)