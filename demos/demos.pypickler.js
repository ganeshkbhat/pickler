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

const JSPickle = require("../index.js");

let { HIGHEST_PROTOCOL, DEFAULT_PROTOCOL, dump, load, Pickler, Unpickler } = JSPickle.pickle();


function loader() {
    if (process.argv[2] == "-d") {
        dump("Testing pickle file", "./demos/test.pkl", "None", "True", "None").then(v => console.log(v));
        Pickler("Testing pickle file", "./demos/test.pkl", "None", "True", "None").then(v => console.log(v));
    } else if (process.argv[2] == "-l") {
        Unpickler("./demos/test.pkl", "True", "ASCII", "strict", "None").then(v => console.log(v));
        load("./demos/test.pkl", "True", "ASCII", "strict", "None").then(v => console.log(v));
    } else {
        
    }
}

loader();