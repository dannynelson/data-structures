var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0; // Hint: set an initial value here

  // this.push = function(value){
  //   this[length] = value;
  //   length++;
  // },



};

Stack.prototype.push = function(value){
  this[length] = value;
  length++;
};

Stack.prototype.pop = function(){
    if (length) length--;
    return this[length];
  };

Stack.prototype.size = function(){
    return length;
  };

console.log(Object.keys(Stack.prototype).length);