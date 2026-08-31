export {}

class PriorityQueue<T> {
  private collection: [T, number][] = [];

  printCollection(): void {
    console.log(this.collection);
  }

  enqueue(arr:[T,number]): void {
    this.collection.push(arr);
    this.collection.sort((a, b) => a[1] - b[1]);
  }

  dequeue(): T | undefined {
    const pair = this.collection.shift();
    return pair?.[0];
  }

  front(): T | undefined {
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
const pq = new PriorityQueue<string>();
pq.enqueue(["tâche 1", 3]);
pq.enqueue(["tâche 2", 1]);
pq.enqueue(["tâche 3", 2]);
pq.printCollection(); // [["tâche 2", 1], ["tâche 3", 2], ["tâche 1", 3]]

console.log(pq.dequeue()); // "tâche 2"
console.log(pq.front());   // "tâche 3"