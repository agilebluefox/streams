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

cache = new Cache('num1');
rand.pipe(filter).pipe(cache);

rand.on('data', (chunk)  => {
    console.log(chunk.toString());
});

cache.on('finish', () => {
    for (let key in Cache.store) {
        console.log(key, ':', Cache.store[key]);
        console.log(Cache.store[key]);
        let b = Cache.store[key];
        console.log(b.toString('utf8'));
        console.log(JSON.stringify(b.toString()));
    }
});
