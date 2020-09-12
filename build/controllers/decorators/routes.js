"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
function routeBinder(method) {
    function get(path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('MetadataKeys.path', path, target, key);
            Reflect.defineMetadata('MetadataKeys.method', method, target, key);
        };
    }
    ;
}
exports.get = routeBinder('Methods.get');
exports.put = routeBinder('Methods.put');
exports.post = routeBinder('Methods.post');
exports.del = routeBinder('Methods.del');
exports.patch = routeBinder('Methods.patch');
