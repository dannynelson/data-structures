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

treeMethods.contains = function(value, startNode){
  startNode = startNode || this; // defaults to parent node if user does not specify startNode
  var found = false;
  var searchTree = function(node) {
    if (node.value === value) found = true;
    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        searchTree(node.children[i]);
      }
    }
  };
  searchTree(startNode);
  return found;
};
