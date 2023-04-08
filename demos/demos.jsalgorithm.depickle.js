/**
 * 
 * Package: mod-pickle
 * Author: Ganesh B
 * Description: 
 * Install: npm i mod-pickle --save
 * Github: https://github.com/ganeshkbhat/pickler
 * npmjs Link: https://www.npmjs.com/package/pickler
 * File: demos/demos.jsalgorithm.pickle.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const hash = require("hasher-apis");
const JSPickle = require("../index.js");
const fs = require("fs");

const salt = "foobar";

// let content = `This is a file containing a collection of programming languages.
// 1. C
// 2. C++
// 3. Java

// This is a file containing a collection of interpreted programming languages.
// 1. Python
// 2. Nodejs
// 3. Ruby

// `;

let hasher = JSPickle.jsPickler();
// let written = hasher.dump("./demos/test", content);
// console.log("[JSPickle]: written", written);

// let read = hasher.load("./demos/test");
// console.log("[JSPickle]: read", read);

let dehashed = hasher.unpickle("./demos/test");
console.log("[JSPickle]: dehashed", dehashed);

// console.log(hasher.ALGORITHM)
// console.log(hasher.KEYALGORITHM)
// console.log(hasher.DIGEST)
// console.log(hasher.OPTIONS)

