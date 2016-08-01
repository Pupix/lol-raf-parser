/*jslint regexp: true, bitwise: true, browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

(function () {
    'use strict';

    var fileParser = require('lol-file-parser'),
        extract = require('./extract'),
        parse = require('./parse'),
        read = require('./read');

    module.exports = fileParser({

        name: 'RAFParser',

        parse: function (parser, cb) {
            parse(parser, cb);
        },

        read: function (data, cb, parser) {
            read(data, cb, parser);
        },

        extract: function (data, output, cb, parser) {
            extract(data, output, cb, parser);
        }

    });

}());
