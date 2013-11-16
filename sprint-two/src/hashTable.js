var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  if (!this._storage.get(i)) {
    this._storage.set(i, [[k,v]]);
  } else {
    var existingProperty = this._storage.get(i);
    existingProperty.push([k, v]);
    this._storage.set(i, existingProperty);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);
  if (!result) return undefined;
  for (var j = 0; j < result.length; j++) {
    if (result[j][0] === k) return result[j][1];
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);
  var indexMatch;
  if (!result) return undefined;
  for (var j = 0; j < result.length; j++) {
    if (result[j][0] === k) indexMatch = j;
  }
  result.splice(indexMatch, 1);
  this._storage.set(i, result);
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
