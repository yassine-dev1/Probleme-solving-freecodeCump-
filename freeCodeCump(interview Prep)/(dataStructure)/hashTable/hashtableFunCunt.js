var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

var HashTable = function(size) {
  this.collection = {};
  this.length=size;
  this.count=0;

  this.add = function(key, value){
     const hashKey = hash(key)%this.length;
     let bucket = this.collection[hashKey];

     if(bucket==undefined)
     {
          bucket={};
          this.collection[hashKey]=bucket;
     }

     if(bucket[key])
       this.count++;
      
    bucket[key]=value;
    return true;

  }.bind(this);

  this.remove= function(key){
    const hashKey = hash(key)%this.length;
    const bucket = this.collection[hashKey];
  
    if(bucket == undefined)  return false;

    if (bucket[key] !== undefined) {
      delete bucket[key];
      this.count--;
      return true;
    }
    return false;

  }.bind(this);

  this.lookup = function(key) {
    const hashKey = hash(key) % this.length;
    const bucket = this.collection[hashKey];
    if (bucket === undefined) return null;
    return bucket[key] !== undefined ? bucket[key] : null;
  }.bind(this);

};