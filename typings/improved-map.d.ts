interface MapConstructor {
    fromObject(source: any): Map<any, any>
    assign(target: Map<any, any>, ...sources: Array<Map<any, any> | Array<[any, any]>>): Map<any, any>
}

interface Map<K, V> {
    update(...sources: Array<Map<any, any> | Array<[any, any]>>): Map<K, V>
    toObject(): any
    pop(key: any, otherwise?: any): any
}
