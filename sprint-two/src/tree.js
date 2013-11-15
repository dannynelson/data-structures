var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(value){
  var searchTree = function(node) {
    if (node.value = value) { return true; }
    for (var i = 0; i < node.children.length; i++) {
      return searchTree(node.children[i]);
    }
  }
  return searchTree(this);
};
