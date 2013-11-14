var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0;
  this.last = 0;
  this.first = 0;

};

Queue.prototype.enqueue = function(value){
  this[this.last] = value;
  this.length++;
  this.last++;
};

Queue.prototype.dequeue = function(){
  if (this.length) {
    var result = this[this.first];
    this.first++;
    this.length--;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.length;
};