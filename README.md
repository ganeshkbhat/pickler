# mod-pickle

npm mod-pickle module implements the python pickle-like binary protocols for serializing and de-serializing a javascript object structure as in python

Find the demos in the <a name="demos"></a>[demos folder](./demos)


[Pickle Reference: https://docs.python.org/3/library/pickle.html#module-pickle](https://docs.python.org/3/library/pickle.html#module-pickle)



- [JSAlgorithmBasedPickler, jsPickler](#jspickler)
- [pickle, pypickle](#pypickle)
- [JSCertificateBasedPickler, jsCertPickler](#jscertpickler)


### USAGE:

```
const JSPickle = require("mod-pickle");

JSPickle.JSAlgorithmBasedPickler
JSPickle.JSCertificateBasedPickler
JSPickle.pypickle

```


### <a name="jspickler"></a>JSAlgorithmBasedPickler, jsPickler

`JSAlgorithmBasedPickler(algorithm, keyAlgorithm, digest, options)`

`jsPickler(algorithm, keyAlgorithm, digest, options)`


```
/**
 * JSAlgorithmBasedPickler, JSPickler
 *
 * @param {*} algorithm
 * @param {*} keyAlgorithm
 * @param {*} digest
 * @param {*} options
 * @return {*}
 */
```

- [.dump](#jspicklerdump)
- [.load](#jspicklerload)
- [.unpickle](#jspicklerunpickle)


#### <a name="jspicklerdump"></a>.dump

`dump(path, data, salt = "secret")`

```

let hasher = JSPickle.jsPickler();
let written = hasher.dump("./demos/test", content);

```

#### <a name="jspicklerload"></a>.load

`load(path, salt = "secret")`

```

const JSPickle = require("mod-pickle");
let hasher = JSPickle.jsPickler();
let read = hasher.load("./demos/test");

```

#### <a name="jspicklerunpickle"></a>.unpickle

`unpickle(path, salt = "secret")`

```

let hasher = JSPickle.jsPickler();
let dehashed = hasher.unpickle("./demos/test");

```



### <a name="pypickle"></a>pickle, pypickle

This is the original python pickle implementation.

```

'use strict';

const JSPickle = require("mod-pickle");

let { HIGHEST_PROTOCOL, DEFAULT_PROTOCOL, dump, load, Pickler, Unpickler } = JSPickle.pickle();
// let { HIGHEST_PROTOCOL, DEFAULT_PROTOCOL, dump, load, Pickler, Unpickler } = JSPickle.pypickle();

dump(dataObj, file, protocol, fix_imports, buffer_callback).then(v => console.log(v));
Pickler(dataObj, file, protocol, fix_imports, "buffer_callback).then(v => console.log(v));

Unpickler(file, fix_imports, encoding, errors, buffer).then(v => console.log(v));
load(file, fix_imports, encoding, errors, buffer).then(v => console.log(v));

```


### <a name="jscertpickler"></a>JSCertificateBasedPickler, jsCertPickler


```

const hash = require("hasher-apis");

let { privateKey, publicKey } = hash._genKeyPair()

hash._dumpKeyFile("./demos/privateKey", privateKey);
hash._dumpKeyFile("./demos/publicKey", publicKey);


const JSPickle = require("mod-pickle");
const fs = require("fs");

const p3 = "./demos/test.txt";
let content = fs.readFileSync(p3, {encoding: "utf-8"});
let hashed = hash.encryptWithKey(content, { publicKeyPath: "./demos/publicKey.pem"});

let data = hash.decryptWithKey(hashed, { privateKeyPath: "./demos/privateKey.pem"});
fs.writeFileSync("./demos/programming.encryptwithkey.txt", data, { encoding: "utf-8"});


```

# Current Status

- In development

# <a name="todo"></a>Todo

Check [.todo](./.todo) file for latest TODO list

<!-- # References -->

# <a name="license"></a>License

The MIT License (MIT) - See [LICENSE](./LICENSE) for further details

Copyright © 2023 - till library works
