describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree("parentNode");
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.

  it("a new tree should have a value associated with it", function() {
    expect(tree.value).toEqual('parentNode');
  });

  it("should be able to add a child", function() {
    tree.addChild('childNode');
    expect(tree.children[0].value).toEqual('childNode');
  });

  it("parent should be able to add multiple children", function() {
    tree.addChild('childNode1');
    tree.addChild('childNode2');
    expect(tree.children.length).toEqual(2);
  });

  it("should be able to create grandchildren", function() {
    tree.addChild('childNode1');
    tree.children[0].addChild('grandchildNode1');
    expect(tree.children[0].children[0].value).toEqual('grandchildNode1');
  });

  it("should return true if value is found in target or descendant node", function() {
    tree.addChild('childNode1');
    tree.addChild('childNode2');
    tree.children[0].addChild('grandchildNode1');
    tree.children[0].addChild('grandchildNode2');
    expect(tree.contains('grandchildNode2')).toEqual(true);
  });

  it("should return false if value does not exist in target or descendant node", function() {
    tree.addChild('childNode1');
    tree.addChild('childNode2');
    tree.children[0].addChild('grandchildNode1');
    tree.children[0].addChild('grandchildNode2');
    expect(tree.contains('grandchildNode5')).toEqual(false);
  });
});

