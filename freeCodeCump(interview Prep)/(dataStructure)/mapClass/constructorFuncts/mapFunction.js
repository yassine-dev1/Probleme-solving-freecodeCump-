var MonMap = function() {
  this.collection = {};
  this.length = 0;

  var has = function(key) {
    return this.collection[String(key)] !== undefined;
  }.bind(this);

  var add = function(key, value) {
    const k = String(key);
    if (!this.has(k)) this.length++;
    this.collection[k] = value;
    return true;
  }.bind(this);

  var remove = function(key) {
    if (this.has(key)) {
      delete this.collection[String(key)];
      this.length--;
      return true;
    }
    return false;
  }.bind(this);

  var get = function(key) {
    return this.has(key) ? this.collection[String(key)] : null;
  }.bind(this);

  var values = function() {
    return Object.values(this.collection);
  }.bind(this);

  var size = function() {
    return this.length;
  }.bind(this);

  var clear = function() {
    this.collection = {};
    this.length = 0;
  }.bind(this);

  this.has = has;
  this.add = add;
  this.remove = remove;
  this.get = get;
  this.values = values;
  this.size = size;
  this.clear = clear;
};