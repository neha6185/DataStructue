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
    getNode(llist, positionFromTail) {
      // Write your code here
      var node = llist;
      var result = llist;
      var index = 0;
      while(node){
         node = node.next;
         if(index++ > positionFromTail){
             result = result.next;
             
         }
      }
      console.log(result.data);
      return result.data;
  
  }
    reverseModify(){
      var curr = this.head;
      this.head = this.tail;
      this.tail = curr;
      var prev = null;var next = null;
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
       


      }
       
      return this;
    }

    traverse() {
      var currNode = this.head;
      while (currNode) {
        console.log(currNode);
        currNode = currNode.next;
      }
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
  
    pop() {
      if (!this.head) {
        return undefined;
      } else {
        var currNode = this.head;
        var newtail = this.head;
        while (currNode.next) {
          newtail = currNode;
          currNode = currNode.next;
        }
        // Hello -> Hi -> !
        // cn nt
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        //  if there is no node left reset the head and tail to null
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return currNode;
      }
    }
    //  Shift remove node from the beginning
    shift() {
      if (!this.head) return undefined;
      var currHead = this.head;
  
      this.head = this.head.next;
      this.length--;
  
      if (this.length === 0) {
        // this.head = null;
        this.tail = null;
      }
      return currHead;
    }
    //  Unshift adds node in the beginning
    unshift(val) {
      var newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
  
    //   get a particular node based on index
    get(index) {
      if (index < 0 || index >= this.length) {
        return null;
      }
      var counter = 0;
      var current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  
    // set or update the node whose index is given
  
    set(index, value) {
      var current = this.get(index);
      if (current) {
        current.data = value;
        return true;
      }
  
      return false;
    }
  
    // Insert a node at particular index
    insert(index, value) {
      if (index < 0 || index > this.length) return false;
      if (index === this.length) {
        this.push(value);
        return true;
      }
      if (index === 0) {
          // One way to return boolean value is by adding !!(val)
        return !!this.unshift(value);
      }
      var newNode = new Node(value);
      var prev = this.get(index - 1);
      var oldNext = prev.next;
      prev.next = newNode;
      newNode.next = oldNext;
      this.length++;
      return true;
    }
  // Remove node from particular index
  
    remove(index){
        if(index <0 || index >= this.length) return null;
        if(index === this.length-1) return this.pop(index);
        if(index ===0) return this.shift(index);
        var prev = this.get(index-1);
        var nodeToRemove = prev.next;
        prev.next = nodeToRemove.next;
        this.length--;
        return nodeToRemove;
    }
  
  //   Reverse the LinkedList
  
  reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var prev=  null;
      var next = null;
      for(var i = 0;i<this.length;i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
      }
      return this;
      // 100->200->300->400->500
  // prev node next
  }
  
  print(){
      var arr = [];
      var current = this.head;
      while(current){
          arr.push(current.val);
          current = current.next;
      }
      console.log(arr);
  }
  }
  
  var list = new singlyLinkedList();
  list.push("hi");
  list.push("hello");
  list.push("!");
  list.push("neha");
  list.push("Aradhya");
  console.log(list);
  // list.shift();
  // list.unshift("neha");
  
  // console.log(list.pop());
  // var l = new singlyLinkedList();
  // l.unshift("Ankit");
  
  // console.log(list.get(1));
  // console.log(list.reverse());
  // console.log(list.reverseModify());
  list.getNode(list,2);

  