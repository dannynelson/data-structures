var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function(){
  // if .parent is null, return undefined
  if (this.parent !== null) {
    // remove child from parent's children
    var children = this.parent.children; // this should be an array

    var findIndexOf = function(childrenArray){
      for (var i = 0; i < children.length; i++) {
        if (children[i] === this) return i;
      }
    };

    // splice out that child from children array
    this.parent.children = children.splice(findIndexOf(children), 1);

    // set child's parent to null
    this.parent = null;

    // return the removed child
    return this;
  }
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
