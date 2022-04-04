function getNode(llist, positionFromTail) {
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
    return result.data;

}
   