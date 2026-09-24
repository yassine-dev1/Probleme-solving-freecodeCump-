class MonMap {
  constructor() {
    this.collection = {};
    this.length = 0;
  }

  has(key) {
    return this.collection[String(key)] !== undefined;
  }

  add(key, value) {
    const k = String(key);
    if (!this.has(k)) this.length++;
    this.collection[k] = value;
    return true;
  }

  remove(key) {
    const k = String(key);
    if (this.has(k)) {
      delete this.collection[k];
      this.length--;
      return true;
    }
    return false;
  }

  get(key) {
    const k = String(key);
    return this.has(k) ? this.collection[k] : null;
  }

  values() {
    return Object.values(this.collection);
  }

  size() {
    return this.length;
  }

  clear() {
    this.collection = {};
    this.length = 0;
  }
}