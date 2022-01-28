class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
//   enqueue(value) {
//     let node = new Node(value);
//     if (!this.size) {
//       this.first = node;
//       this.last = node;
//     } else {
//       this.last.next = node;
//       this.last = node;
//     }
//     this.size++;
//     return this.size;
//   }

//   dequeue() {
//       if(!this.size) return null;
//       let returnNode = this.first;
//       if(this.first === this.last) {
//           this.last = null;
//       }
//       this.first = this.first.next;
//       this.size--;
//       return returnNode.vale;
//   }
  enqueue(value) {
      const node = new Node(value);
      if(!this.size) {
          this.first = node;
      } else if(this.size === 1) {
          this.first.next = node;
      } else {
          this.last.next = node;
      }
      this.last = node;
      this.size++;
      return this.size;
  }

  dequeue() {
      if(!this.size) return null;
      let returnValue;
      returnValue = this.first.value;
      if(this.size === 1) {
          this.first = nul
          this.last = null;
      } else {
          this.first = this.first.next;
      }
      this.size--;
      return returnValue;
  }
}
