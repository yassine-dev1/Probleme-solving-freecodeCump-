class HashTable {
  private buckets: [string, any][][];   // chaînage
  private size: number;
  private count: number;

  constructor(size: number = 16) {
    this.buckets = Array.from({ length: size }, () => []);
    this.size = size;
    this.count = 0;
  }

  private hash(key: string): number {
    let h = 5381;
    for (let i = 0; i < key.length; i++) {
      h = (h << 5) + h + key.charCodeAt(i);
    }
    return Math.abs(h) % this.size;
  }

  set(key: string, value: any): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;   // mise à jour
        return;
      }
    }

    bucket.push([key, value]);   // nouvelle clé
    this.count++;

    if (this.count / this.size > 0.75) this.resize();
  }

  get(key: string): any | null {
    const index = this.hash(key);
    for (const [k, v] of this.buckets[index]) {
      if (k === key) return v;
    }
    return null;
  }

  remove(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.count--;
        return true;
      }
    }
    return false;
  }

  private resize(): void {
    const old = this.buckets;
    this.size *= 2;
    this.count = 0;
    this.buckets = Array.from({ length: this.size }, () => []);

    for (const bucket of old) {
      for (const [k, v] of bucket) {
        this.set(k, v);   // rehash
      }
    }
  }
}