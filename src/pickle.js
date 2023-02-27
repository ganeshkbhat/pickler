/**
 * 
 * Package: pickler
 * Author: Ganesh B
 * Description: 
 * Install: npm i pickler --save
 * Github: https://github.com/ganeshkbhat/pickler
 * npmjs Link: https://www.npmjs.com/package/pickler
 * File: src/pickle.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


/**
 * TODO 
 * REFERENCE:
 * https://docs.python.org/3/library/pickle.html#module-pickle
 * https://github.com/python/cpython/blob/3.11/Lib/pickle.py
 *
 */
function pickle() {

    // The pickle module defines three exceptions:
    //     exception pickle.PickleError
    //     exception pickle.PicklingError
    //     exception pickle.UnpicklingError
    //     Other exception errors: AttributeError, EOFError, ImportError, and IndexError.

    var fs = require("fs");

    var HIGHEST_PROTOCOL;
    var DEFAULT_PROTOCOL;

    // Equal to Pickler(file, protocol).dump(obj) => file
    function dump(obj, file, protocol = None, { }, fix_imports = true, buffer_callback = None) { }
    //  => bytes
    function dumps(obj, protocol = None, { }, fix_imports = true, buffer_callback = None) { }
    // Unpickler(file).load() => bytes
    function load(file, { }, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None) { }
    // loads(...args) => bytes
    function loads(data, "/", { }, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None) { }

    // class pickle.Pickler(file, protocol = None, *, fix_imports = true, buffer_callback = None)
    //     dump(obj)
    //     persistent_id(obj)
    //     dispatch_table
    //     reducer_override(obj)
    //     fast

    function Pickler() { }

    // class pickle.Unpickler(file, *, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None)
    //     load()
    //     persistent_load(pid)
    //     find_class(module, name)

    function Unpickler() { }

    // class pickle.PickleBuffer(buffer)
    //     raw()
    //     release()

    function PickleBuffer() { }

    return {
        HIGHEST_PROTOCOL: () => this.HIGHEST_PROTOCOL,
        DEFAULT_PROTOCOL: () => this.DEFAULT_PROTOCOL,
        dump,
        dumps,
        load,
        loads,
        Pickler,
        Unpickler,
        PickleBuffer
    }
}

module.exports.pickle = pickle;
