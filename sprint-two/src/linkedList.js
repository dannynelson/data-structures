// Note: don't use an array to do this.
var MakeLinkedList = function(){
  this.head = null;
  this.tail = null;
};

MakeLinkedList.prototype.addToHead = function(value){
  var newNode = makeNode(value);
  if (!this.tail) this.tail = newNode;
  if (this.head) {
    this.head.prev = newNode;
    newNode.next = this.head;
  }
  this.head = newNode;
}

MakeLinkedList.prototype.addToTail = function(value){
  var newNode = makeNode(value);
  if (!this.head) { this.head = newNode; }
  if (this.tail) {
    newNode.prev = this.tail;
    this.tail.next = newNode;
  }
  this.tail = newNode;
};

MakeLinkedList.prototype.removeHead = function(){
  var result = this.head;
  this.head = this.head.next;
  return result;
};

MakeLinkedList.prototype.removeTail = function(){
  var result = this.tail;
  this.tail = this.tail.prev;
  return result;
}

MakeLinkedList.prototype.contains = function(value){
  var checkNext = function(node) {
    if (node.value === value) return true;
    if (node.next === null) return false;
    return checkNext(node.next);
  }
  return checkNext(this.head);
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};