"use strict";

var Alphabet = require('./alphabet');
var RandomNumber = require('./number');
var Cache = require('./cache');
var Filter = require('./filter');
var alpha = new Alphabet();
var cache = new Cache('alpha1');
var rand = new RandomNumber();
var filter = new Filter();

// alpha.on('data', function (chunk) {
//     console.log(chunk.toString());
// });
//
// alpha.pipe(cache);

console.log('Cache store:');

cache = new Cache('num1');
rand.pipe(filter).pipe(cache);

rand.on('data', function (chunk) {
    console.log(chunk.toString());
});

cache.on('finish', function () {
    for (var key in Cache.store) {
        console.log(key, ':', Cache.store[key]);
        console.log(Cache.store[key]);
        var b = Cache.store[key];
        console.log(b.toString('utf8'));
        console.log(JSON.stringify(b.toString()));
    }
});

//# sourceMappingURL=main-compiled.js.map