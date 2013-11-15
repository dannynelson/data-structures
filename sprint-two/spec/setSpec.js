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

  it("should be able to create a set with a name", function() {
    var setA = makeSet('setA');
    expect(setA.name).toEqual('setA');
  });

  it("should add value to empty set", function() {
    var setA = makeSet('setA');
    setA.add('xyz');
    expect(Object.keys(setA._storage)).toEqual(['xyz']);
  });

  it("should not make duplicates within a set", function() {
    var setA = makeSet('setA');
    setA.add('xyz');
    setA.add('abc');
    setA.add('xyz');
    expect(Object.keys(setA._storage).length).toEqual(2);
  });

  it("should remove items from the set", function() {
    var setA = makeSet('setA');
    setA.add('xyz');
    setA.add('abc');
    setA.remove('xyz');
    expect(setA._storage['xyz']).toEqual(undefined);
  });

  it("should return true if item is found in set", function() {
    var setA = makeSet('setA');
    setA.add('xyz');
    setA.add('abc');
    expect(setA.contains('xyz')).toEqual(true);
  });

  it("should return false if item is not in set", function() {
    var setA = makeSet('setA');
    setA.add('xyz');
    setA.add('abc');
    expect(setA.contains('xyz')).toEqual(true);
  });

  it("shared values in different sets should not create duplicates", function() {
    var setA = makeSet('setA');
    var setB = makeSet('setB');
    setA.add('xyz');
    setA.add('abc');
    setB.add('xyz');
    expect(Object.keys(setPrototype._storage).length).toEqual(2);
  });

});