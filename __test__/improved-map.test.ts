import '../src/improved-map';

test("Map.fromObject creates the desired Map from an object", () => {
    const sym = Symbol();
    const map = Map.fromObject({key: 'value', 41: 43});
    expect(map).toEqual(new Map().set('key', 'value').set('41', 43))
});

test("Map.assign updates target with from multiple sources", () => {
    const map = new Map();
    const result = Map.assign(map, new Map([['a', 1], ['b', 2]]), new Map([['a', 42], ['c', 3]]));
    expect(result).toEqual(map);
    expect(map).toEqual(new Map([['a', 42], ['b', 2], ['c', 3]]));
});

test("Map.prototype.update updates from multiple sources", () => {
    const map = new Map();
    const result = map.update(new Map([['a', 1], ['b', 2]]), new Map([['a', 42], ['c', 3]]));
    expect(result).toEqual(map);
    expect(map).toEqual(new Map([['a', 42], ['b', 2], ['c', 3]]));
});

test("Map.prototype.toObject returns the correct object", () => {
    const sym = Symbol();
    /* Typescript's MapConstructor can't handle these types in an array literal */
    const map = new Map().set('a', 1).set('b', 42).set(0, 0).set(sym, 'symbol').set(null, null);
    expect(map.toObject()).toEqual({a: 1, b: 42, '0': 0, [sym]: 'symbol', 'null': null});
});

test("Map.prototype.pop removes and returns a present value", () => {
    const map = new Map([['a', 42], ['b', 2], ['c', 3]]);
    expect(map.pop('a')).toEqual(42);
    expect(map).toEqual(new Map([['b', 2], ['c', 3]]));
});

test("Map.prototype.pop returns otherwise value when key isn't present", () => {
    const map = new Map([['a', 42], ['b', 2], ['c', 3]]);
    expect(map.pop('d', 4)).toEqual(4);
    expect(map).toEqual(new Map([['a', 42], ['b', 2], ['c', 3]]));
});
