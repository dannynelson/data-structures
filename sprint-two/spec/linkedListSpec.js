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

  it("should return node when calling removeHead", function() {
    var node1 = makeNode('node1');
    linkedList.addToTail('node1');
    expect(linkedList.removeHead()).toEqual(node1);
  });

  it("should find existing value in linked list", function() {
    linkedList.addToTail('node1');
    linkedList.addToTail('node2');
    linkedList.addToTail('node3');
    expect(linkedList.contains('node2')).toEqual(true);
  });

  it("should return false if value is not found in linked list", function() {
    linkedList.addToTail('node1');
    linkedList.addToTail('node2');
    linkedList.addToTail('node3');
    expect(linkedList.contains('node5')).toEqual(false);
  });

  // Beginning of doubly linked list tests

  it("should be able to add to head", function() {
    linkedList.addToTail('node1');
    linkedList.addToTail('node2');
    linkedList.addToTail('node3');
    linkedList.addToHead('node0');
    expect(linkedList.head.value).toEqual('node0');
  });

  // it("should be able to remove tail", function() {
  //   linkedList.addToTail('node1');
  //   linkedList.addToTail('node2');
  //   linkedList.addToTail('node3');
  //   linkedList.removeTail();
  //   expect(linkedList.tail).toEqual('node2');
  // });

  // nodes should have a link to the next node and the previous node

});