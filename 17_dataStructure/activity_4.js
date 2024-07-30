// TreeNode
class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(20);
root.left = new TreeNode(10);
root.right = new TreeNode(30);

root.left.left = new TreeNode(5);
root.left.right = new TreeNode(15);

root.right.left = new TreeNode(25);
root.right.right = new TreeNode(35);

console.log(root);

class BinaryTree{
    constructor(){
        this.root = null;
    }
    add(value){
        const newNode = new TreeNode(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return;
                    }
                    current = current.left;
                }else{
                    if(current.right === null){
                        current.right = newNode;
                        return;
                    }
                    current = current.right;
                }
            }
        }
    }
    display(){
        if(!this.root){
            console.log('Tree is empty');
            return;
        }
        this.inOrder(this.root);
    }
    inOrder(node){
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.add(20);
binaryTree.add(10);
binaryTree.add(30);
binaryTree.add(5);
binaryTree.add(7);
binaryTree.add(15);
binaryTree.add(25);
binaryTree.add(35);
binaryTree.display();