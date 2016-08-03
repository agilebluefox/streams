"use strict";

const Alphabet = require('./alphabet');
const RandomNumber = require('./number');
const Cache = require('./cache');
const Filter = require('./filter');
let alpha = new Alphabet();
let cache = new Cache('alpha1');
let rand = new RandomNumber;
let filter = new Filter;

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
rand.on('data', (chunk)  => {
    // print the list of numbers in the buffer
    console.log(chunk.toString());
});

// perform a function when the finish event occurs on the writeable instance
cache.on('finish', () => {
    for (let key in Cache.store) {
        // print the key and the buffer data stored as the value
        console.log(key, ':', Cache.store[key]);
        let b = Cache.store[key];
        // print the numbers in the buffer after being filtered
        console.log(b.toString('utf8'));
    }
});
