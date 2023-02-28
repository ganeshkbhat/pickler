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


const path = require("path");
const _filelock = require("../index.js");
const expect = require('chai').expect;

describe('test-.mjs::mod-pickle: Test Suite for ', function () {

    describe('test-.js::mod-pickle: [Test A] Test Suite for ', function () {
        
        it('[Test A] Test for ', function (done) {
            expect(200).to.equal(200);
            done();
        });

        it('[Test A] Test for ', function (done) {
            expect(200).to.equal(200);
            done();
        });

    });


});


// const hash = require("hasher-apis");
// const JSPickle = require("../index.js");
// const fs = require("fs");

// let hasher = JSPickle.jsCertPickler();
// let written = hasher.dump("./demos/test", content);
// console.log("[JSPickle]: written", written);

// let read = hasher.load("./demos/test");
// console.log("[JSPickle]: read", read);

// let dehashed = hasher.unpickle("./demos/test");
// console.log("[JSPickle]: dehashed", dehashed);

// console.log(hasher.ALGORITHM)
// console.log(hasher.KEYALGORITHM)
// console.log(hasher.BASE)
// console.log(hasher.KEYGENTYPE)
// console.log(hasher.DIGEST)
// console.log(hasher.KOPTIONS)
// console.log(hasher.ENCRYPTTYPE)
// console.log(hasher.OPTIONS)

