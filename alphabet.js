"use strict";

const Readable = require('stream').Readable;

class Alphabet extends Readable {
    constructor(options) {
        super(options);
        this._start = 'a';
        this._end = 'z';
        this._curr = this._start.charCodeAt(0);
    }

    _read() {
        let letter = String.fromCharCode(this._curr);
        const buf = Buffer.from(letter, 'utf8');
        this.push(buf);
        this._curr++;
        if (letter === this._end) {
            this.push(null);
        }
    }
}

module.exports = Alphabet;