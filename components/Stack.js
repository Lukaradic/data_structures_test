class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export  class Stack {
    constructor() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }

    push(value) {
        const node = new Node(value);

        if(!this.length) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        } 
        this.length++;
        return this.length;
    }

    pop() {
        if(!this.length)  return null;

        let returnValue = this.first.value;
        if(this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return returnValue;
    }
}