var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0;
  instance.last = 0;
  instance.first = 0;

  // Implement the methods below
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this[this.last] = value;
    this.length++;
    this.last++;
  },

  dequeue: function(){
    if (this.length) {
      var result = this[this.first];
      this.first++;
      this.length--;
      return result;
    }
  },

  size: function(){
    return this.length;
  }
};
