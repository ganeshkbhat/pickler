/**
 * 
 * Package: mod-pickle
 * Author: Ganesh B
 * Description: 
 * Install: npm i mod-pickle --save
 * Github: https://github.com/ganeshkbhat/pickler
 * npmjs Link: https://www.npmjs.com/package/pickler
 * File: demos/demos.jscertificate.pickle.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const JSPickle = require("../index.js");
const fs = require("fs");


let hasher = JSPickle.jsCertPickler();
let written = hasher.dump("./demos/test", content);
console.log("[JSPickle]: written", written);

let read = hasher.load("./demos/test");
console.log("[JSPickle]: read", read);

let dehashed = hasher.unpickle("./demos/test");
console.log("[JSPickle]: dehashed", dehashed);
