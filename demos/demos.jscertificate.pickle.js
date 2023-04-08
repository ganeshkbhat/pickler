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


const hash = require("hasher-apis");
const JSPickle = require("../index.js");
const fs = require("fs");

const salt = "foobar";

const p1 = "./demos/test.jspkl";
const p2 = "./demos/programming.hashed.txt";
const p3 = "./demos/test.txt";



// Hash P3 File to P3
let { privateKey, publicKey, encrypted } = hash.encrypt(p1, p1, "sha256", "rsa", "base64", { modulusLength: 2048 }, { modulusLength: 2048 });
// let { privateKey, publicKey, encrypted } = hash.encrypt(p3, p1);
console.log("[hasher._fileHash]: File hashed");
console.log(encrypted);



// DeHash P3 File hashed content to P3
let r3 = hash.decrypt(p1, p1, privateKey, "sha256", "rsa", "base64", { modulusLength: 2048 });
// let r3 = hash.decrypt(p1, p1, privateKey);
console.log("[hasher._fileHash]: File dehashed");
console.log(r3);

