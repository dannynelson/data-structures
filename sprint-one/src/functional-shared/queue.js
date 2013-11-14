var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0;
  instance.index = 0;

  // Implement the methods below
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this[this.index] = value;
    this.length++;
    this.index++;
  },

  dequeue: function(){
    if (this.length) {
      var min;
      for (var k in this) {
        min = min || k;
        if (k < min) min = k;
      }
      var result = this[min];
      delete this[min];
      this.length--;
      return result;
    }
  },

  size: function(){
    return this.length;
  }
};
