# lol-raf-parser
A parser for RAF files from League of Legends.

## Download
lol-raf-parser is installable via:

- [GitHub](https://github.com/Pupix/lol-raf-parser) `git clone https://github.com/Pupix/lol-raf-parser.git`
- [npm](https://www.npmjs.com/): `npm install lol-raf-parser`

## Usage example

```js
var rafParser = require('lol-raf-parser'),
    raf = new rafParser();

    raf.read('Archive_1.raf', function (err, data) {
        console.log(data);
        //  {
        //    version: 1,
        //    files: [...]
        //  }
    });

```

## Available methods

**N.B:** All methods act as promises if no callback is passed.

### parse(path, cb)

It will roughly parse a RAF file from the given path.

**Parameters**

1. **path {string}** A path to where the file to parse resides.
2. **[cb] {Function}** A callback called with `(error, parsedData)` as arguments.

### read(path, cb)

It will read a RAF file from the given path, removing redundant data.

**Parameters**

1. **path {string}** A path to where the file to read resides.
2. **[cb] {Function}** A callback called with `(error, readData)` as arguments.

### extract(path, output, cb)

It will extract the conents of a RAF file from the given path.

**N.B:** The RAF file will be used to understand the structure of the `.raf.dat` archive that must have the same name and be in the same diractory.

**Parameters**

1. **path {string}** A path to where the file to read resides.
2. **[cb] {Function}** A callback called with `(error, readData)` as arguments.
