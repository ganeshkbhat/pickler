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



let { privateKey, publicKey } = hash._genKeyPair()

hash._dumpKeyFile("./demos/privateKey", privateKey);
hash._dumpKeyFile("./demos/publicKey", publicKey);


let content = fs.readFileSync(p3, {encoding: "utf-8"});
let hashed = hash.encryptWithKey(content, { publicKeyPath: "./demos/publicKey.pem"});
fs.writeFileSync("./demos/programming.encryptwithkey.txt", hashed, { encoding: "utf-8"});
