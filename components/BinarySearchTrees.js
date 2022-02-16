class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
export class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this.root;
        }
        let curr = this.root;
        while(curr) {
            if(newNode.value === curr.value) return null;
            if(newNode.value > curr.value) {
                if(curr.right) {
                    curr = curr.right
                } else {
                    curr.right = newNode;
                }
            } else {
                if(curr.left) {
                    curr = curr.left
                } else {
                    curr.left = newNode;
                }
            }
        }
        return this.root;
    }
    find(val) {
        if(!this.root) return false;
        let curr = this.root;
        while(curr) {
            if(curr.value === val) return true;
            if(curr.value > val) {
                curr = curr.left
            } else {
                curr = curr.right
            }
        }
        return false;
    }
}


let bts = new BinarySearchTree();
bts.insert(10);
bts.insert(11);
bts.insert(8);
bts.insert(1);
bts.insert(2);
bts.insert(15);
bts.insert(17);
bts.insert(22);
console.log(bts.find(8));




console.log(bts)