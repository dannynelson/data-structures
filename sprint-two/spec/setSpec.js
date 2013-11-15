describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should add value to empty set", function() {
    var setA = makeSet();
    setA.add('xyz');
    expect(Object.keys(setA._storage)).toEqual(['xyz']);
  });

  it("should not make duplicates within a set", function() {
    var setA = makeSet();
    setA.add('xyz');
    setA.add('abc');
    setA.add('xyz');
    expect(Object.keys(setA._storage).length).toEqual(2);
  });

  it("should remove items from the set", function() {
    var setA = makeSet();
    setA.add('xyz');
    setA.add('abc');
    setA.remove('xyz');
    expect(setA._storage['xyz']).toEqual(undefined);
  });

  it("should return true if item is found in set", function() {
    var setA = makeSet();
    setA.add('xyz');
    setA.add('abc');
    expect(setA.contains('xyz')).toEqual(true);
  });


  // it("should add a value to the set", function() {
  //   setA();
  //   expect(set.setA.add('value1','setA')).toEqual();
  //   expect(set.contains).toEqual(jasmine.any(Function));
  //   expect(set.remove).toEqual(jasmine.any(Function));
  // });

});