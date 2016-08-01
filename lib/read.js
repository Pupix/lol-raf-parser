
'use strict';

module.exports = function (data, cb) {
    let raf = {
        files: []
    };

    raf.version = data.version;

    data.files.forEach(file => {
        raf.files.push({
            hash: file.hash,
            offset: file.offset,
            size: file.size,
            name: data.strings[file.pathIndex]
        });
    });

    cb(null, raf);
};