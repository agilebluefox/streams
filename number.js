"use strict";

const Readable = require('stream').Readable;

class RandomNumber extends Readable {
    constructor(options) {
        super(options);
        this.length = 10;
        this.min = 0;
        this.max = 999;
        this.diff = this.max - this.min;
    }

    _read() {
        for (let i = 0; i < this.length; i++) {
            let number = Math.floor(Math.random() * (this.diff)) + this.min;
            let buf = Buffer.from(number.toString(), 'utf8');
            this.push(buf);
        }
        this.push(null);
    }
}

module.exports = RandomNumber;