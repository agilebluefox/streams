"use strict";

const Transform = require('stream').Transform;

class Filter extends Transform {
    constructor(options) {
        super(options);
    }

    isUnder500(value) {
        value = +value;
        return value < 500;
    }

    _transform(data, encoding, callback) {
        // console.log(data.toString('utf8'));
        data = data.toString('utf8');
        if (+data < 500) {
            this.push(data);
        }
        callback();
    }
}

module.exports = Filter;