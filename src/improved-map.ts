Map.assign = function (target, ...sources) {
    for (const source of sources) {
        for (const [key, value] of source) {
            target.set(key, value)
        }
    }
    return target;
};

Map.prototype.update = function (...sources) {
    return Map.assign(this, ...sources);
};

Map.prototype.toObject = function () {
    const result: any = {};
    for (const [key, value] of this) {
        if (typeof key === "string" || typeof key === "symbol") {
            result[key] = value;
        } else {
            result[`${key}`] = value;
        }
    }
    return result
};

Map.prototype.pop = function (key, otherwise) {
    if (!this.has(key)) {
        return otherwise;
    }
    const value = this.get(key);
    this.delete(key);
    return value;
};
