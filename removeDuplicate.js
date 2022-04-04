function removeDuplicates(llist) {
    // Write your code here

var node = llist;
if(!node) return node;
while(node){
    if(node.next && node.data === node.next.data){
        node.next = node.next.next;
    }
    else{
        node = node.next;
    }
}
return llist;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        let llist1 = removeDuplicates(llist.head);

        printSinglyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
