# improved-map
Some trivial convenience methods for Maps.

## Installation
```
npm install improved-map
```

## API
Import/require this library to enhance the Map objects. Nothing is exported.
### Map.fromObject(source)
Returns a new `Map` created from the `source` object's own enumerable property key, value pairs.

**NOTE:** Key, value pairs are added to the `Map` in the order provided by `Object.entries`,
which is implementation dependent.

**NOTE:** Numeric property keys on an `object` are actually stored as strings,
and will be added to the `Map` as such, e.g. `Map.fromObject({41: 43}) === new Map().set('41', 43)`.

### Map.assign(target, ...sources)
The `Map.assign` method is used to copy key, value pairs from one or more source Maps to the target Map.
It returns the target Map.
Values in the target Map will be overwritten by values with the same key in source Maps.
Later sources' values will simply overwrite earlier ones.

### Map.prototype.update(...sources)
Calls `Map.assign` with `this` as the target.

### Map.prototype.pop(key\[, otherwise])
The `pop` method returns the value associated with `key` after deleting the key-value pair from the Map.
If `key` isn't in the Map, it returns `otherwise`, if provided, or else `undefined`.

### Map.prototype.toObject()
The `toObject` method returns an object with properties based on the key-value pairs of the Map.
Keys of the Map that aren't strings or symbols are converted to strings before being added to the returned object.

## Tests
Tests are written using Jest, with TypeScript support provided by [ts-jest](https://github.com/kulshekhar/ts-jest).
