Map.fromObject = function (source) {
    let map = new Map();
    for (const [k, v] of Object.entries(source)) {
        map.set(k, v);
    }
    return map;
};
Map.assign = function (target, ...sources) {
    for (const source of sources) {
        for (const [key, value] of source) {
            target.set(key, value);
        }
    }
    return target;
};
Map.prototype.update = function (...sources) {
    return Map.assign(this, ...sources);
};
Map.prototype.pop = function (key, otherwise) {
    if (!this.has(key)) {
        return otherwise;
    }
    const value = this.get(key);
    this.delete(key);
    return value;
};
Map.prototype.toObject = function () {
    const result = {};
    for (const [key, value] of this) {
        if (typeof key === "string" || typeof key === "symbol") {
            result[key] = value;
        }
        else {
            result[`${key}`] = value;
        }
    }
    return result;
};
//# sourceMappingURL=improved-map.js.map