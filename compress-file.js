var fs = require('fs');
var zlib = require('zlib');

var inFile = fs.createReadStream(process.argv[2]);
var outFile = fs.createWriteStream(process.argv[3]);

inFile.pipe(zlib.createGzip()).pipe(outFile);