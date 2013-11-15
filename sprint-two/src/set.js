var makeSet = function(name){
  var set = Object.create(setPrototype); // fix me
  //set._storage = {};
  set.name = name;
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  this._storage[value] = true; // {this.name: true};
};

setPrototype.contains = function(value){
  if (this._storage[value]) return true;
  return false;
};

setPrototype.remove = function(value){
  delete this._storage[value];
};

setPrototype._storage = {};