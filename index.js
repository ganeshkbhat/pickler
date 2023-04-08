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

var { pickle, pypickle, JSAlgorithmBasedPickler, jsPickler, JSCertificateBasedPickler, jsCertPickler } = require("./src/pickle");


module.exports.pickle = pickle;
module.exports.pypickle = pypickle;

module.exports.JSAlgorithmBasedPickler = JSAlgorithmBasedPickler;
module.exports.jsPickler = jsPickler;

module.exports.JSCertificateBasedPickler = JSCertificateBasedPickler;
module.exports.jsCertPickler = jsCertPickler;


module.exports.default = {
    pickle, pypickle, 
    JSAlgorithmBasedPickler, jsPickler,
    JSCertificateBasedPickler, jsCertPickler
}

