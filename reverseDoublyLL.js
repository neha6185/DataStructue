class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
    return this;
  }
  reverse() {
    var prev = null;
    var curr = this.head;
    var temp = null;
    while (curr) {
      temp = curr.next;
      curr.next = prev;
      curr.prev = temp;
      prev = curr;
      curr = temp;
    }
    return this;
  }

  sortInsert(data) {
    let node = new Node(data);
    var curr = this.head;
    var temp = null;
    if (!this.head) {
      this.head = node;

      return this;
    }
    while (curr) {
      if (curr.val > data) {
          if(curr.prev){
        temp = curr.prev;
        curr.prev = node;
        node.prev = temp;
        temp.next = node;
        node.next = curr;
        curr.prev = node;
        break;
          }
          else{
              curr.prev = node;
              node.next  = curr;
              this.head = node;
          }
      }
      var prev = curr;
      curr = curr.next;
      if (!curr) {
        prev.next = node;
        node.prev = prev;
      }
    }
this.length++;
    return this;
  }
}

let doublyLL = new DoublyLinkedList();
doublyLL.push(5).push(10).push(15).push(20);
// console.log(doublyLL.reverse());
console.log(doublyLL.sortInsert(4));
