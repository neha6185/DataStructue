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
findMergeNode(headA,headB){
  var a = headA;
  var b = headB;
  var data = null;
  var lenA=0,lenB=0;
  while(a){
      lenA++;
      a = a.next;
  }
  while(b){
      lenB++;
      b = b.next;
  }
  var bigList =null;
  var smallList = null;
  let len = lenA -lenB;
  if(len > 0){
      bigList = headA;
      smallList = headB;
      
  }else{
      bigList = headB;
      smallList = headA;
  }
  // len = Math.abs(len);
  for(var i =0;i<len;i++){
      bigList =bigList.next;
  }
  while(bigList&&smallList){
      if(bigList.data == smallList.data){
          data = bigList.data;
          return data;
      }
      else{
          bigList=bigList.next;
          smallList=  smallList.next;
      }
  }
  }


  hasCycle(){
    if(!this.head) return false;
    var head1 = this.head;
    var head2 = this.head;
    
    while(head2 !=null && head2.next !=null){
      head1 = head1.next;
      head2 = head2.next.next;
      if(head1 ==head2){
        return 1;
      }

    }
    return 0;


  }
}
  var list1 = new singlyLinkedList();
  list1.push(1);
  list1.push(2);
  list1.push(3);
  list1.push(1);
  list1.push(4);
  list1.push(5);
  var re = list1.hasCycle();
  console.log(re);
  var list2 = new singlyLinkedList();
  list2.push(6);
  list2.push(4);
  list2.push(5);
  var merge = new singlyLinkedList();
  // var re = merge.findMergeNode(list1.head,list2.head);
  // console.log(re);
