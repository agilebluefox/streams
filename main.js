"use strict";

const Alphabet = require('./alphabet');
const RandomNumber = require('./number');
const Cache = require('./cache');
const Filter = require('./filter');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
let alpha = new Alphabet();
let cache = new Cache('alpha1');
let rand = new RandomNumber;
let filter = new Filter;

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
rand.on('data', (chunk)  => {
    // print the list of numbers in the buffer
    console.log(chunk.toString()); // ie. 123 345 234 567
});

// perform a function when the finish event occurs on the writeable instance
cache.on('finish', () => {
    for (let key in Cache.store) {
        // print the key and the buffer data stored as the value
        console.log(key, ':', Cache.store[key]); // prints the buffer contents in hex
        let b = Cache.store[key];
        for (let value of b.values()) {
            console.log(String.fromCharCode(value)); // prints single number, not element
        }
        // print the numbers in the buffer after being filtered
        // console.log(b.toString('utf8')); // ie. 123345234
        decoder.write(b); //prints one number at a time
    }
});
