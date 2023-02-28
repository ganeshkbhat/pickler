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

const hash = require("hasher-apis");
const path = require("path");
const fs = require("fs");


function JSCertificateBasedPickler() {

    function dump(path, data, salt = "secret", publicKey) {
        if (typeof data === "object") {
            data = JSON.stringify(data);
        } else {
            data = data.toString();
        }
        return
    }

    function load(path, salt = "secret", privateKey) {
        return
    }

    function unpickle(path, salt = "secret", privateKey) {
        return
    }

    return {
        dump,
        load,
        unpickle
    }
}


/**
 * JSAlgorithmBasedPickler, JSPickler
 *
 * @param {*} algorithm
 * @param {*} keyAlgorithm
 * @param {*} digest
 * @param {*} options
 * @return { < { ALGORITHM, KEYALGORITHM, DIGEST, OPTIONS, dump: <function>, load: <function>, unpickle: <function> } > } { ALGORITHM, KEYALGORITHM, DIGEST, OPTIONS, dump, load, unpickle }
 */
function JSAlgorithmBasedPickler(algorithm, keyAlgorithm, digest, options) {

    const ALGORITHM = algorithm || "aes-256-ctr";
    const KEYALGORITHM = keyAlgorithm || "sha256";
    const DIGEST = digest || "base64";
    const OPTIONS = options || { logger: console.log, useextension: true };

    /**
     *
     *
     * @param {*} filepath
     * @param {*} data
     * @param {string} [salt="secret"]
     * @return {*} 
     */
    function dump(filepath, data, salt = "secret") {
        let ext = (!!OPTIONS.useextension) ? ".jspkl" : "";
        if (typeof data === "object") {
            // data = JSON.stringify(data);
            data = new Buffer(data);
        } else {
            // data = data.toString();
            data = new Buffer(data);
        }
        return hash.fileHashFromContent(path.join(filepath + ext), data, salt, ALGORITHM, KEYALGORITHM, DIGEST, OPTIONS);
    }

    /**
     *
     *
     * @param {*} filepath
     * @param {string} [salt="secret"]
     * @return {*} 
     */
    function load(filepath, salt = "secret") {
        let ext = (!!OPTIONS.useextension) ? ".jspkl" : "";
        return hash.fileDeHashLoadContent(path.join(filepath + ext), salt, ALGORITHM, KEYALGORITHM, DIGEST, OPTIONS);
    }

    /**
     *
     *
     * @param {*} filepath
     * @param {string} [salt="secret"]
     * @return {*} 
     */
    function unpickle(filepath, salt = "secret") {
        let ext = (!!OPTIONS.useextension) ? ".jspkl" : "";
        return hash.fileDeHashContent(path.join(filepath + ext), salt, ALGORITHM, KEYALGORITHM, DIGEST, OPTIONS);
    }

    return {
        ALGORITHM: (() => ALGORITHM)(),
        KEYALGORITHM: (() => KEYALGORITHM)(),
        DIGEST: (() => DIGEST)(),
        OPTIONS: (() => OPTIONS)(),
        dump,
        load,
        unpickle
    }
}

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
    function loads(data, slash = "/", { }, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None) { }

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
        HIGHEST_PROTOCOL: (() => HIGHEST_PROTOCOL)(),
        DEFAULT_PROTOCOL: (() => DEFAULT_PROTOCOL)(),
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
module.exports.pypickle = pickle;

module.exports.JSAlgorithmBasedPickler = JSAlgorithmBasedPickler;
module.exports.jsPickler = JSAlgorithmBasedPickler;

module.exports.JSCertificateBasedPickler = JSCertificateBasedPickler;
module.exports.jsCertPickler = JSCertificateBasedPickler;
