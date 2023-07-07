/**
 * 
 * Package: mod-pickle
 * Author: Ganesh B
 * Description: 
 * Install: npm i mod-pickle --save
 * Github: https://github.com/ganeshkbhat/pickler
 * npmjs Link: https://www.npmjs.com/package/pickler
 * File: src/pickle.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const InterfacePickle = require("./interface");
const { syncPython, asyncPython } = require('python-wasm');

/**
 * TODO 
 * REFERENCE:
 * https://docs.python.org/3/library/pickle.html#module-pickle
 * https://github.com/python/cpython/blob/3.11/Lib/pickle.py
 *
 */
function PyPickle(args) {
    InterfacePickle.call(this, args);

    this.run = (script) => {
        const python = await syncPython();
        return python.exec(script);
    }

    this.processArgs = function processArgs(argv) {
        let args = process.argv.slice(3, process.argv.length);
        let data = args.filter(v => v.includes("--data="))[0]?.split("=")[1];
        let filename = args.filter(v => v.includes("--filename="))[0]?.split("=")[1];
        let option = args.filter(v => v.includes("--options="))[0]?.split("=")[1] || 'wb';
        let encoding = args.filter(v => v.includes("--encoding="))[0]?.split("=")[1] || 'latin1';
        let protocol = args.filter(v => v.includes("--protocol="))[0]?.split("=")[1] || 'None';
        return { data, filename, option, encoding, args };
    }

    // loads(...args) => bytes
    this.loads = function loads(data, slash = "/", { }, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = null) { }

    // class pickle.Pickler(file, protocol = None, *, fix_imports = true, buffer_callback = None)
    //     dump(obj)
    //     persistent_id(obj)
    //     dispatch_table
    //     reducer_override(obj)
    //     fast

    this.dump = function dump(obj, file, protocol = null, fix_imports = true, buffer_callback) {
        let fileoption = "wb";
        protocol = protocol || "None";
        fix_imports = fix_imports || "True";
        buffer_callback = buffer_callback || "None";
        let script = "\"import pickle;file = open('" + file + "', '" + fileoption + "');pickle.dump('" + obj + "', file, protocol=" + protocol + ", fix_imports=" + fix_imports + ", buffer_callback=" + buffer_callback + ");\"";
        return run(script);
    }

    this.persistent_id = function persistent_id(obj) { }

    this.dispatch_table = function dispatch_table(obj) { }

    this.reducer_override = function reducer_override(obj) { }

    this.fast = function fast(obj) { }

    this.Pickler = async function Pickler(obj, file, protocol = null, fix_imports = true, buffer_callback) {
        return await dump(obj, file, protocol, fix_imports, buffer_callback);
    }

    // class pickle.Unpickler(file, *, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None)
    //     load()
    //     persistent_load(pid)
    //     find_class(module, name)

    this.load = function load(file, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers) { }

    this.persistent_load = function persistent_load(pid) { }

    this.find_class = function find_class(module, name) { }

    this.Unpickler = async function Unpickler(file, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers) {
        return await load(file, fix_imports, encoding, errors, buffers);
    }

    // class pickle.PickleBuffer(buffer)
    //     raw()
    //     release()

    async function PickleBuffer(file, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers) {
        return;
    }

    this.PickleBuffer = PickleBuffer;

    async function raw(file, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers) {
        return;
    }

    this.raw = raw;

    async function release(file, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers) {
        return;
    }

    this.release = release;

}

module.exports.PyPickle = PyPickle;
