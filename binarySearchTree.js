class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
            var current = this.root;
            while(true){
                if(val === current.value) return undefined;
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;

                    }
                        current = current.left;
                    
                }else {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                        current = current.right;
                    
                
                }

            }
            
        
        
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(11);
tree.insert(16);
tree.insert(2);
tree.insert(7);

// tree.root = new Node(10);                                          10
// tree.root.right =new Node(15);                             5           13
// tree.root.left = new Node(6);                         2        7     11    16
// tree.root.right.right = new Node(20);
// tree.root.left.right(9);