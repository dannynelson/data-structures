describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("head should point to node after calling addToTail once", function() {
    var node = makeNode('node');
    linkedList.addToTail('node');
    expect(node).toEqual(linkedList.head);
  });

  it("tail should point to node after calling addToTail once", function() {
    var node = makeNode('node');
    linkedList.addToTail('node');
    expect(node).toEqual(linkedList.tail);
  });

  it("tail should point to second node after calling addToTail twice", function() {
    var node = makeNode('node2');
    linkedList.addToTail('node1');
    linkedList.addToTail('node2');

    expect(node).toEqual(linkedList.tail);
  });
});