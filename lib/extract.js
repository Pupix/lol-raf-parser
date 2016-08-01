'use strict';

const XP = require('expandjs');
const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

module.exports = function (data, output, cb, parser) {

    // path/to/filename.raf.dat
    const input = path.join(`${parser.path}.dat`);

    XP.iterate(data.files, (next, file) => {

        const name = path.join(output, file.name);
        const headerCheck = fs.createReadStream(input, {start: file.offset, end: file.offset + 1});
        const reader      = fs.createReadStream(input, {start: file.offset, end: file.offset + file.size});
        const inflate     = zlib.createInflate();

        mkdirp(path.dirname(name), function (err) {
            if (err) { return next(err, null); }

            const writer = fs.createWriteStream(name);

            reader.on('error', (err) => next(err));
            reader.on('end', () => next());

            // Workaround for the uncompressed files inside the archive
            headerCheck.on('data', function (chunk) {
                if (chunk.readUInt16LE(0) === 40056) {
                    reader.pipe(inflate).pipe(writer);
                } else {
                    reader.pipe(writer);
                }
            });
        });

    }, err => {
        cb(err || null, true);
    });

};