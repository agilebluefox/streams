"use strict";

var Alphabet = require('./alphabet');
var RandomNumber = require('./number');
var Cache = require('./cache');
var Filter = require('./filter');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var alpha = new Alphabet();
var cache = new Cache('alpha1');
var rand = new RandomNumber();
var filter = new Filter();

// print out the letters of the alphabet
// alpha.on('data', function (chunk) {
//     console.log(chunk.toString());
// });
//
// alpha.pipe(cache);

console.log('Cache store:');

// add a key to the cache
cache = new Cache('num1');
// pipe the readable instance to the transform then to the writable
rand.pipe(filter).pipe(cache);

// perform a function when the read event is triggered
rand.on('data', function (chunk) {
    // print the list of numbers in the buffer
    console.log(chunk.toString()); // ie. 123 345 234 567
});

// perform a function when the finish event occurs on the writeable instance
cache.on('finish', function () {
    for (var key in Cache.store) {
        // print the key and the buffer data stored as the value
        console.log(key, ':', Cache.store[key]); // prints the buffer contents in hex
        var b = Cache.store[key];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = b.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;

                console.log(String.fromCharCode(value)); // prints single number, not element
            }
            // print the numbers in the buffer after being filtered
            // console.log(b.toString('utf8')); // ie. 123345234
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        decoder.write(b); //prints one number at a time
    }
});

//# sourceMappingURL=main-compiled.js.map