'use strict';

module.exports = function (parser, cb) {

    var raf = {
            header: {},
            files: [],
            paths: [],
            strings: []
        };

    raf.header.magic        = parser.uint();
    raf.header.version      = parser.uint();
    raf.header.managerIndex = parser.uint();
    raf.header.filesOffset  = parser.uint();
    raf.header.pathsOffset  = parser.uint();
    
    raf.filesCount = parser.uint();

    for (let i = 0; i < raf.filesCount; i += 1) {
        raf.files.push({
            hash  : parser.uint(),
            offset: parser.uint(),
            size: parser.uint(),
            pathIndex  : parser.uint()
        });
    }

    raf.pathsSize = parser.uint();
    raf.pathsCount = parser.uint();

    for (let i = 0; i < raf.pathsCount; i += 1) {
        raf.paths.push({
            offset: parser.uint(),
            length: parser.uint()
        });
    }

    for (let i = 0; i < raf.pathsCount; i += 1) {
        raf.strings.push(parser.string0());
    }

    cb(null, raf);

};