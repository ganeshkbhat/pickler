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
const InterfacePickle = require("./interface");

/**
 *
 *
 * @param {*} keys
 * @param {*} options
 * @return { < { ALGORITHM, KEYALGORITHM, BASE, KEYGENTYPE, KEYOPTIONS, KOPTIONS, DIGEST, ENCRYPTTYPE, OPTIONS, PUBLICKEYPATH: <function>, PRIVATEKEYPATH: <function>, dump: <function>, load: <function>, unpickle: <function> } > }
 * { < { ALGORITHM, KEYALGORITHM, BASE, KEYGENTYPE, KEYOPTIONS, KOPTIONS, DIGEST, ENCRYPTTYPE, OPTIONS, PUBLICKEYPATH, PRIVATEKEYPATH, dump, load, unpickle } > } 
 */
function JSCertificateBasedPickler(keys, options) {
    if (!keys) keys = { "generateKeys": true, path: "./" };

    const ALGORITHM = keys.algorithm || "sha256";
    const KEYALGORITHM = keys.keyAlgorithm || "sha256";
    const BASE = keys.base || "hex";
    const KEYGENTYPE = keys.keyGenType || "rsa";
    const KEYOPTIONS = keys.keyOptions || { modulusLength: 2048 };
    const KOPTIONS = keys.options || { modulusLength: 2048 };
    const DIGEST = keys.digest || "base64";
    const ENCRYPTTYPE = keys.encryptType || "createSign";
    const OPTIONS = { logger: console.log, useextension: true, ...options };

    if (!!keys.generateKeys) {
        var { publicKey, privateKey } = hash._genKeyPair(KEYGENTYPE, KEYOPTIONS);

        keys["publicKeyPath"] = path.join(keys.publicKeyPath || "./publicKey");
        keys["privateKeyPath"] = path.join(keys.privateKeyPath || "./privateKey");
        console.log(publicKey, privateKey, publicKey.toString());

        try {
            fs.writeFileSync(keys.publicKeyPath, publicKey);
        } catch (e) {
            throw new Error(e.toString());
        }

        try {
            fs.writeFileSync(keys.privateKeyPath, privateKey);
        } catch (e) {
            throw new Error(e.toString());
        }
    }

    var PUBLICKEYPATH = (!!keys.publicKeyPath) ? keys.publicKeyPath : null;
    var PRIVATEKEYPATH = (!!keys.privateKeyPath) ? keys.privateKeyPath : null;

    /**
     *
     *
     * @param {*} filepath
     * @param {*} data
     * @param {*} publicKeyPath
     */
    function dump(filepath, data, publicKeyPath) {
        PUBLICKEYPATH = (!!publicKeyPath) ? publicKeyPath : PUBLICKEYPATH;
        let ext = (!!OPTIONS.useextension) ? ".jscpkl" : "";
        ext = (!!filepath.includes(".jscpkl")) ? "" : ".jscpkl";
        data = (typeof data === "object") ? JSON.stringify(data) : data.toString();
        return
    }

    /**
     *
     *
     * @param {*} filepath
     * @param {*} privateKeyPath
     */
    function load(filepath, privateKeyPath) {
        PRIVATEKEYPATH = (!!privateKeyPath) ? privateKeyPath : PRIVATEKEYPATH;
        let ext = (!!OPTIONS.useextension) ? ".jscpkl" : "";
        ext = (!!filepath.includes(".jscpkl")) ? "" : ".jscpkl";
        return
    }

    /**
     *
     *
     * @param {*} filepath
     * @param {*} privateKeyPath
     */
    function unpickle(filepath, privateKeyPath) {
        PRIVATEKEYPATH = (!!privateKeyPath) ? privateKeyPath : PRIVATEKEYPATH;
        let ext = (!!OPTIONS.useextension) ? ".jscpkl" : "";
        ext = (!!filepath.includes(".jscpkl")) ? "" : ".jscpkl";
        return
    }

    return {
        ALGORITHM: (() => ALGORITHM)(),
        KEYALGORITHM: (() => KEYALGORITHM)(),
        BASE: (() => BASE)(),
        KEYGENTYPE: (() => KEYGENTYPE)(),
        KEYOPTIONS: (() => KEYOPTIONS)(),
        KOPTIONS: (() => KOPTIONS)(),
        DIGEST: (() => DIGEST)(),
        ENCRYPTTYPE: (() => ENCRYPTTYPE)(),
        OPTIONS: (() => OPTIONS)(),
        PUBLICKEYPATH: () => PUBLICKEYPATH,
        PRIVATEKEYPATH: () => PRIVATEKEYPATH,
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
        ext = (!!filepath.includes(".jspkl")) ? "" : ".jspkl";
        data = (typeof data === "object") ? JSON.stringify(data) : data.toString();
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
        ext = (!!filepath.includes(".jspkl")) ? "" : ".jspkl";
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
        ext = (!!filepath.includes(".jspkl")) ? "" : ".jspkl";
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


// function pickle() {
//     InterfacePickle.call(this, args);

//     // The pickle module defines three exceptions:
//     //     exception pickle.PickleError
//     //     exception pickle.PicklingError
//     //     exception pickle.UnpicklingError
//     //     Other exception errors: AttributeError, EOFError, ImportError, and IndexError.

//     var fs = require("fs");

//     var HIGHEST_PROTOCOL;
//     var DEFAULT_PROTOCOL;

//     // Equal to Pickler(file, protocol).dump(obj) => file
//     function dump(obj, file, protocol = None, { }, fix_imports = true, buffer_callback = None) { }
//     //  => bytes
//     function dumps(obj, protocol = None, { }, fix_imports = true, buffer_callback = None) { }
//     // Unpickler(file).load() => bytes
//     function load(file, { }, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None) { }
//     // loads(...args) => bytes
//     function loads(data, slash = "/", { }, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None) { }

//     // class pickle.Pickler(file, protocol = None, *, fix_imports = true, buffer_callback = None)
//     //     dump(obj)
//     //     persistent_id(obj)
//     //     dispatch_table
//     //     reducer_override(obj)
//     //     fast

//     function Pickler() { }

//     // class pickle.Unpickler(file, *, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None)
//     //     load()
//     //     persistent_load(pid)
//     //     find_class(module, name)

//     function Unpickler() { }

//     // class pickle.PickleBuffer(buffer)
//     //     raw()
//     //     release()

//     function PickleBuffer() { }

//     return {
//         HIGHEST_PROTOCOL: (() => HIGHEST_PROTOCOL)(),
//         DEFAULT_PROTOCOL: (() => DEFAULT_PROTOCOL)(),
//         dump,
//         dumps,
//         load,
//         loads,
//         Pickler,
//         Unpickler,
//         PickleBuffer
//     }
// }


function pickle() {
    const threadAsync = require("./thread");


    async function run(script, options = {}) {
        let command = "-c " + script;
        return threadAsync(command, options);
    }

    // The pickle module defines three exceptions:
    //     exception pickle.PickleError
    //     exception pickle.PicklingError
    //     exception pickle.UnpicklingError
    //     Other exception errors: AttributeError, EOFError, ImportError, and IndexError.

    var fs = require("fs");

    var HIGHEST_PROTOCOL;
    var DEFAULT_PROTOCOL;

    /**
     * Process Args for command line parsing
     *
     * @param {*} argv
     * @return {*} 
     */
    function processArgs(argv) {
        let args = process.argv.slice(3, process.argv.length);
        let data = args.filter(v => v.includes("--data="))[0]?.split("=")[1];
        let filename = args.filter(v => v.includes("--filename="))[0]?.split("=")[1];
        let option = args.filter(v => v.includes("--options="))[0]?.split("=")[1] || 'wb';
        let encoding = args.filter(v => v.includes("--encoding="))[0]?.split("=")[1] || 'latin1';
        let protocol = args.filter(v => v.includes("--protocol="))[0]?.split("=")[1] || 'None';
        return { data, filename, option, encoding, args };
    }

    // Equal to Pickler(file, protocol).dump(obj) => file
    function dump(obj, file, protocol = null, fix_imports = true, buffer_callback) {
        let fileoption = "wb";
        protocol = protocol || "None";
        fix_imports = fix_imports || "True";
        buffer_callback = buffer_callback || "None";
        let script = "\"import pickle;file = open('" + file + "', '" + fileoption + "');pickle.dump('" + obj + "', file, protocol=" + protocol + ", fix_imports=" + fix_imports + ", buffer_callback=" + buffer_callback + ");\"";
        return run(script).catch(err => console.error(err));
    }

    //  => bytes
    // function dumps(obj, protocol = None, { }, fix_imports = true, buffer_callback = None) { }

    // Unpickler(file).load() => bytes
    function load(file, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers) {
        let fileoption = "rb";
        fix_imports = fix_imports || "True";
        encoding = encoding || "ASCII";
        errors = errors || "strict";
        buffers = buffers || "None";
        let script = "\"import pickle;file = open('" + file + "', '" + fileoption + "');print(pickle.load(file, fix_imports=" + fix_imports + ", encoding='" + encoding + "', errors='" + errors + "', buffers=" + buffers + "));\"";
        return run(script).catch(err => console.error(err));
    }

    // loads(...args) => bytes
    // function loads(data, slash = "/", { }, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None) { }

    // class pickle.Pickler(file, protocol = None, *, fix_imports = true, buffer_callback = None)
    //     dump(obj)
    //     persistent_id(obj)
    //     dispatch_table
    //     reducer_override(obj)
    //     fast

    async function Pickler(obj, file, protocol = null, fix_imports = true, buffer_callback) {
        return await dump(obj, file, protocol, fix_imports, buffer_callback);
    }

    // class pickle.Unpickler(file, *, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers = None)
    //     load()
    //     persistent_load(pid)
    //     find_class(module, name)

    async function Unpickler(file, fix_imports = true, encoding = 'ASCII', errors = 'strict', buffers) {
        return await load(file, fix_imports, encoding, errors, buffers);
    }

    // class pickle.PickleBuffer(buffer)
    //     raw()
    //     release()

    function PickleBuffer() { }

    return {
        HIGHEST_PROTOCOL: (() => HIGHEST_PROTOCOL)(),
        DEFAULT_PROTOCOL: (() => DEFAULT_PROTOCOL)(),
        dump,
        // dumps,
        load,
        // loads,
        Pickler,
        Unpickler,
        // PickleBuffer
    }
}


module.exports.pickle = pickle;

module.exports.JSAlgorithmBasedPickler = JSAlgorithmBasedPickler;
module.exports.jsPickler = JSAlgorithmBasedPickler;

module.exports.JSCertificateBasedPickler = JSCertificateBasedPickler;
module.exports.jsCertPickler = JSCertificateBasedPickler;
