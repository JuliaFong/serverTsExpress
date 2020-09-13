import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function bodyValidator(...keys: []) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKeys.middleware, keys, target, key)
    };
}

