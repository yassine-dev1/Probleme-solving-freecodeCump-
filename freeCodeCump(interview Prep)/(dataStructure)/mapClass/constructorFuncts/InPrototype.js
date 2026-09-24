var MonMap = function() {
  this.collection = {};
  this.length = 0;
};

MonMap.prototype.has = function(key) {
  return this.collection[String(key)] !== undefined;
};

MonMap.prototype.add = function(key, value) {
  const k = String(key);
  if (!this.has(k)) this.length++;
  this.collection[k] = value;
  return true;
};

MonMap.prototype.remove = function(key) {
  if (this.has(key)) {
    delete this.collection[String(key)];
    this.length--;
    return true;
  }
  return false;
};

MonMap.prototype.get = function(key) {
  return this.has(key) ? this.collection[String(key)] : null;
};

MonMap.prototype.values = function() {
  return Object.values(this.collection);
};

MonMap.prototype.size = function() {
  return this.length;
};

MonMap.prototype.clear = function() {
  this.collection = {};
  this.length = 0;
};