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

  it("head should point to next node when there are two nodes", function() {
    linkedList.addToTail('node1');
    linkedList.addToTail('node2');
    expect(linkedList.head.next).toEqual(linkedList.tail);
  });

  it("second node should point to tail when there are three nodes created", function() {
    linkedList.addToTail('node1');
    linkedList.addToTail('node2');
    linkedList.addToTail('node3');
    expect(linkedList.head.next.next).toEqual(linkedList.tail);
  });

  it("head should point to second node after adding three nodes, removing one", function() {
    var node2 = makeNode('node2');
    linkedList.addToTail('node1');
    linkedList.addToTail('node2');
    linkedList.addToTail('node3');
    linkedList.removeHead();
    expect(node2.value).toEqual(linkedList.head.value);
  });

  // next test should return the removeHead value
});