/**
 * 
 * Package: mod-pickle
 * Author: Ganesh B
 * Description: 
 * Install: npm i mod-pickle --save
 * Github: https://github.com/ganeshkbhat/pickler
 * npmjs Link: https://www.npmjs.com/package/pickler
 * File: demos/demos.pickle.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const hash = require("hasher-apis");
const fs = require("fs");

function encryptedJSPickle(path, data, salt = "secret") {
    if (typeof data === "object") {
        data = JSON.stringify(data);
    } else {
        data = data.toString();
    }
    let hashed = hash._fileContentHash(data, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
    let hashedBuf = new Buffer(hashed, "utf8"); // <Buffer 74 65 73 74 69 6e 67 20 66 69 6c 65 20 74 65 73 74 65 72>
    fs.writeFileSync(path + ".pkl", hashedBuf, { encoding: "utf-8", flag: "w+" }).close();
}

function encryptedJSPickleLoad(path, salt = "secret") {
    let hashedBuf = new Buffer(fs.readFileSync(path, { encoding: "utf-8", flag: "r" })).close();
    let hashed = hash._fileContentDeHash(hashedBuf.toString(), salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
    return hashed;
}

function encryptedJSUnPickle(path, salt = "secret") {
    let hashed = encryptedJSPickleLoad(path, salt = "secret");
    fs.writeFileSync(path + ".pkl", hashed, { encoding: "utf-8", flag: "w+" }).close();
}

encryptedJSPickle("./test", "Testing my data");
