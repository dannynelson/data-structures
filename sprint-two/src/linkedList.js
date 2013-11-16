// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var newNode = makeNode(value);
    if (!list.tail) list.tail = newNode;
    if (list.head) {
      list.head.prev = newNode;
      newNode.next = list.head;
    }
    list.head = newNode;
  }

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (!list.head) { list.head = newNode; }
    if (list.tail) {
      newNode.prev = list.tail;
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var result = list.head;
    list.head = list.head.next;
    return result;
  };

  list.removeTail = function(){
    var result = list.tail;
    list.tail = list.tail.prev;
    return result;
  }

  list.contains = function(value){
    var checkNext = function(node) {
      if (node.value === value) return true;
      if (node.next === null) return false;
      return checkNext(node.next);
    }
    return checkNext(list.head);
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
