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

});