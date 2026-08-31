class PriorityQueue {
  private collection: [string, number][] = [];

  printCollection(): void {
    console.log(this.collection);
  }

  enqueue(arr: [string, number]): void {
    this.collection.push(arr);
    this.collection.sort((a, b) => a[1] - b[1]);
  }

  dequeue(): string {
    const pair = this.collection.shift();
    return pair ? pair[0] : "";
  }

  front(): string | undefined {
    return this.collection[0]?.[0];
  }

  isEmpty(): boolean {
    return this.collection.length === 0;
  }

  size(): number {
    return this.collection.length;
  }
}

// Test
const pq = new PriorityQueue();
pq.enqueue(["tâche 1", 3]);
pq.enqueue(["tâche 2", 1]);
pq.enqueue(["tâche 3", 2]);
pq.printCollection(); 

console.log(pq.dequeue()); 
console.log(pq.front());   


 //   this.enqueue = function(arr) {
  //   if (this.isEmpty()) {
  //     this.collection.push(arr);
  //   } else {
  //     let added = false;
  //     for (let i = 0; i < this.collection.length; i++) {
  //       if (arr[1] < this.collection[i][1]) {
  //         this.collection.splice(i, 0, arr);
  //         added = true;
  //         break;
  //       }
  //     }
  //     if (!added) {
  //       this.collection.push(arr);
  //     }
  //   }
  // };