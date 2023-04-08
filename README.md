# mod-pickle

npm mod-pickle module implements the python pickle-like binary protocols for serializing and de-serializing a javascript object structure as in python

Find the demos in the <a name="demos"></a>[demos folder](./demos)


[Pickle Reference: https://docs.python.org/3/library/pickle.html#module-pickle](https://docs.python.org/3/library/pickle.html#module-pickle)



- [JSAlgorithmBasedPickler, jsPickler](#jspickler)
- [pickle, pypickle](#pypickle) [<sub>INDEVELOPMENT</sub>]
- [JSCertificateBasedPickler, jsCertPickler](#jscertpickler) [<sub>INDEVELOPMENT</sub>]



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


```

#### <a name="jspicklerload"></a>.load

`load(path, salt = "secret")`

```


```

#### <a name="jspicklerunpickle"></a>.unpickle

`unpickle(path, salt = "secret")`

```


```



### <a name="pypickle"></a>pickle, pypickle

```

'use strict';

const JSPickle = require("../index.js");

let { HIGHEST_PROTOCOL, DEFAULT_PROTOCOL, dump, load, Pickler, Unpickler } = JSPickle.pickle();
// let { HIGHEST_PROTOCOL, DEFAULT_PROTOCOL, dump, load, Pickler, Unpickler } = JSPickle.pypickle();

dump(dataObj, file, protocol, fix_imports, buffer_callback).then(v => console.log(v));
Pickler(dataObj, file, protocol, fix_imports, "buffer_callback).then(v => console.log(v));
Unpickler(file, fix_imports, encoding, errors, buffer).then(v => console.log(v));
load(file, fix_imports, encoding, errors, buffer).then(v => console.log(v));

```


### <a name="jscertpickler"></a>JSCertificateBasedPickler, jsCertPickler [INDEVELOPMENT]


# Current Status

- In development for pickle, pypickle, JSCertificateBasedPickler, jsCertPickler

# <a name="todo"></a>Todo

Check [.todo](./.todo) file for latest TODO list

<!-- # References -->

# <a name="license"></a>License

The MIT License (MIT) - See [LICENSE](./LICENSE) for further details

Copyright © 2023 - till library works
