var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = makeTree(value);
  console.log(this);
};

treeMethods.contains = function(){
};
