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

  it("should be able to add a child and parent should be able to reference it", function() {
    tree.addChild('childNode');
    expect(tree.children.value).toEqual('childNode');
  });

});