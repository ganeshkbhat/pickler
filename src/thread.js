/**
 * 
 * Package: mod-pickle
 * Author: Ganesh B
 * Description: 
 * Install: npm i mod-pickle --save
 * Github: https://github.com/ganeshkbhat/pickler
 * npmjs Link: https://www.npmjs.com/package/pickler
 * File: src/thread.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


var cp = require('child_process');

function isObject(obj) {
    return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

function toBoolean(bool) {
    if (bool === 'false') bool = false;
    return !!bool;
}

function normaliseOptions(options) {

    var DEFAULTS = Object.freeze({
        encoding: 'utf8',
        silent: false
    })

    if (!isObject(options)) {
        options = {}
    } else {
        if (typeof options.silent !== 'undefined') {
            options.silent = toBoolean(options.silent);
        }
    }

    options = Object.assign({}, DEFAULTS, options);

    if (options.silent && typeof options.stdio === 'undefined') {
        options.stdio = 'pipe';
    }

    return options;
}

function threadAsync(command, options) {

    options = normaliseOptions(options);
    var error, stdout, stderr, code, ok;

    try {
        error = null
        stdout = cp.execSync("python " + command, options)
        stderr = ''
        code = 0
        ok = true
    } catch (e) {
        error = e
        stdout = e.stdout
        stderr = e.stderr
        code = e.status || /* istanbul ignore next */ 1
        ok = false
    }

    return {
        error: error,
        stdout: stdout,
        stderr: stderr,
        code: code,
        ok: ok
    }
}

module.exports = threadAsync;
