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

let content = `This is a file containing a collection of programming languages.
1. C
2. C++
3. Java

This is a file containing a collection of interpreted programming languages.
1. Python
2. Nodejs
3. Ruby
`;


let { privateKey, publicKey } = hash._genKeyPair()

hash._dumpKeyFile("./demos/privateKey", JSON.stringify(privateKey));
hash._dumpKeyFile("./demos/publicKey", JSON.stringify(publicKey));

let filename = "./demos/test.jspkl"
let hashdata = hash.encryptWithKey(content, { publicKeyPath: "./demos/publicKey" });
fs.writeFileSync(filename, data, { encoding: "utf-8" });
