class Node{
    constructor(data){
    this.data = data;
    this.next = null;
    }
}
function insertNodeAtHead(head, data) {
    var newNode = new Node(data);
    if(!head){
        head = newNode;
        newNode.next = null;
        
     }
     else{
         newNode.next = head;
         head = newNode;
     }
     var currNode = head;
     while(currNode){
         console.log(currNode.data);
         currNode = currNode.next;
         
     }

}

