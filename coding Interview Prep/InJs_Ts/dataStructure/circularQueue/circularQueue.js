class CircularQueue {
  constructor(size) {
    this.queue = new Array(size+1).fill(null);
    this.read = 0;
    this.write = 0;
    this.max = size+1;
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Vérifier si la queue est pleine
    const nextWrite = (this.write + 1) % this.max;
    if (nextWrite === this.read) {
      return null;
    }

    this.queue[this.write] = item;
    this.write = nextWrite;
    return item;
  }

  dequeue() {
    // Vérifier si la queue est vide
    if (this.read === this.write) {
      return null;
    }

    const item = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = (this.read + 1) % this.max;
    return item;
  }

  peek() {
    if (this.read === this.write) return null;
    return this.queue[this.read];
  }

  isEmpty() {
    return this.read === this.write;
  }

  isFull() {
    return (this.write + 1) % this.max === this.read;
  }
}


class CircularQueueWithFlag {
  constructor(size) {
    this.queue = new Array(size).fill(null);
    this.read = 0;
    this.write = 0;
    this.max = size;
    this.full = false;
  }

  enqueue(item) {
    if (this.full) return null;
    
    this.queue[this.write] = item;
    this.write = (this.write + 1) % this.max;
    this.full = this.write === this.read;
    return item;
  }

  dequeue() {
    if (this.read === this.write && !this.full) return null;
    
    const item = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = (this.read + 1) % this.max;
    this.full = false;
    return item;
  }
}


class CircularQueueWithCount {
  constructor(size) {
    this.queue = new Array(size).fill(null);
    this.read = 0;
    this.write = 0;
    this.max = size;
    this.count = 0;  // Important : suivre le nombre d'éléments
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Vérifier si la queue est pleine
    if (this.count === this.max) {
      return null;
    }

    this.queue[this.write] = item;
    this.write = (this.write + 1) % this.max;
    this.count++;
    return item;
  }

  dequeue() {
    // Vérifier si la queue est vide
    if (this.count === 0) {
      return null;
    }

    const item = this.queue[this.read];
    this.queue[this.read] = null;  // Optionnel : nettoyer
    this.read = (this.read + 1) % this.max;
    this.count--;
    return item;
  }
}


// Test
const cq = new CircularQueue(3);
console.log(cq.enqueue(2)); // 2
console.log(cq.enqueue(2)); // 2
console.log(cq.enqueue(2)); // 2
console.log(cq.enqueue(2)); // null (plein)

// console.log(cq.dequeue()); // 2
// console.log(cq.enqueue(2)); // 2
// console.log(cq.print()); // [2, 2, null]

// console.log(cq.dequeue()); // 2
// console.log(cq.dequeue()); // 2
// console.log(cq.dequeue()); // null (vide)
// console.log(cq.dequeue()); // null