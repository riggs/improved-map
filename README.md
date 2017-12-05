# improved-map
Some trivial convenience methods for Maps.

## Installation
```
npm install improved-map
```

## API
Import/require this library to enhance the Map objects. Nothing is exported.
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
