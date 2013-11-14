var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0; // Hint: set an initial value here

  this.push = function(value){
    this[length] = value;
    length++;
  },

  this.pop = function(){
    if (length) length--;
    return this[length];
  },

  this.size = function(){
    return length;
  }

};

