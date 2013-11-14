var Stack = function() {

  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0; // Hint: set an initial value here

};

Stack.prototype.push = function(value){
  this[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function(){
  if (this.length) this.length--;
  return this[this.length];
};

Stack.prototype.size = function(){
  return this.length;
};