"use strict";
const Writable = require('stream').Writable;

class Cache extends Writable {
    constructor(key, options) {
        super(options);
        this._key = key;
        this._value = null;
        this.on('finish', function () {
            Cache.store[this._key] = this._value;
        });
    }

    _write(chunk, encoding, callback) {
        // if no data exists in the buffer...
        if (!this._value) {
            this._value = chunk;
        }
        // if data is already present in the buffer...
        else {
            this._value = Buffer.concat([this._value, chunk]);
        }
        callback();
    }
}

Cache.store = {};

module.exports = Cache;
