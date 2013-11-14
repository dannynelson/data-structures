var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;

  return instance;
};

var stackMethods = {
  push: function(value){
    this[this.length] = value;
    this.length++;
  },

  pop: function(){
    if (this.length) this.length--;
    return this[this.length];
  },

  size: function(){
    return this.length;
  }
};

var stackMethods = {};