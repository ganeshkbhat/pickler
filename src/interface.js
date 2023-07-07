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

function InterfacePickle(args) {
    this.processArgs = () => { return new Error("Interface not applied") }
    this.Pickler = () => { return new Error("Interface not applied") }
    this.Unpickler = () => { return new Error("Interface not applied") }
    this.load = () => { return new Error("Interface not applied") }
    this.persistent_load = () => { return new Error("Interface not applied") }
    this.find_class = () => { return new Error("Interface not applied") }
    this.PickleBuffer = () => { return new Error("Interface not applied") }
    this.raw = () => { return new Error("Interface not applied") }
    this.release = () => { return new Error("Interface not applied") }
}


module.exports.InterfacePickle = InterfacePickle;
