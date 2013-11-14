var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var last = 0;
  var first = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    instance[last] = value;
    size++;
    last++;
  };

  instance.dequeue = function(){
    if (size) {
      var result = instance[first];
      first++;
      size--;
      return result;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
