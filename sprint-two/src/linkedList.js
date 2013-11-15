// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (!list.head) { list.head = newNode; }
    if (list.tail) list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function(){
    list.head = list.head.next; 
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
