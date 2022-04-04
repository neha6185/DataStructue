class Node {
    constructor(data) {
      //this represent individual instance(object) of class
      this.data = data;
      this.next = null;
    }
  }
  
  class singlyLinkedList {
    constructor(val) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        this.length++;
        return this;
      }
}

function mergeLists(head1, head2) {
    let newHead = new SinglyLinkedList(null);
    let newList = newHead;
    var curr1 = head1;
    var curr2 = head2;
    
    while(curr1 && curr2){
      
        if(curr1.data < curr2.data){
            newList.next = curr1;
            curr1 = curr1.next;
        }else {
            newList.next = curr2;
            curr2 = curr2.next;
        }
       
        newList = newList.next;
        
    }
    while(curr1){
        newList.next =curr1;
        break;
    }
    while(curr2){
        newList.next = curr2;
        break;
    }
    return newHead.next;
}