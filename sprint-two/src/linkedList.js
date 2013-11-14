// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.index = 0;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (list.head === null) { list.head = node; }
    list.tail = node;
  };

  list.removeHead = function(){
  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
