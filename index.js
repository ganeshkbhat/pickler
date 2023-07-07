/**
 * 
 * Package: mod-pickle
 * Author: Ganesh B
 * Description: 
 * Install: npm i mod-pickle --save
 * Github: https://github.com/ganeshkbhat/pickler
 * npmjs Link: https://www.npmjs.com/package/pickler
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var { pickle, JSAlgorithmBasedPickler, jsPickler, JSCertificateBasedPickler, jsCertPickler } = require("./src/pickle");
const { PyPickle } = require("./src/pypickle");


module.exports.pickle = pickle;
module.exports.pypickle = PyPickle;
module.exports.PyPickle = PyPickle;

module.exports.JSAlgorithmBasedPickler = JSAlgorithmBasedPickler;
module.exports.jsPickler = jsPickler;

module.exports.JSCertificateBasedPickler = JSCertificateBasedPickler;
module.exports.jsCertPickler = jsCertPickler;

module.exports.default = {
    pickle, PyPickle,
    JSAlgorithmBasedPickler, jsPickler,
    JSCertificateBasedPickler, jsCertPickler,
    pypickle: PyPickle
}

