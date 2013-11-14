var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    instance[index] = value;
    size++;
    index++;
  };

  instance.dequeue = function(){
    if (size) {
      var min;
      for (var k in instance) {
        min = min || k;
        if (k < min) min = k;
      }
      var result = instance[min];
      delete instance[min];
      size--;
      return result;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
