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



let content = fs.readFileSync("./demos/programming.encryptwithkey.txt", {encoding: "utf-8"});
let data = hash.decryptWithKey(content, { privateKeyPath: "./demos/privateKey.pem"});
fs.writeFileSync("./demos/programming.encryptwithkey.txt", data, { encoding: "utf-8"});
