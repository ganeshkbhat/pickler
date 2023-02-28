# mod-pickle

npm mod-pickle module implements the python pickle-like binary protocols for serializing and de-serializing a javascript object structure as in python

Find the demos in the [demos folder](./demos)


[Pickle Reference: https://docs.python.org/3/library/pickle.html#module-pickle](https://docs.python.org/3/library/pickle.html#module-pickle)



- [JSAlgorithmBasedPickler, jsPickler](#jsPickler)
- [pickle, pypickle](#pypickle) [<sub>INDEVELOPMENT</sub>]
- [JSCertificateBasedPickler, jsCertPickler](#jsCertPickler) [<sub>INDEVELOPMENT</sub>]



### <a name="jsPickler"></a>JSAlgorithmBasedPickler, jsPickler

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

- [.dump](#JSPicklerdump)
- [.load](#JSPicklerload)
- [.unpickle](#JSPicklerunpickle)


#### <a name="JSPicklerdump"></a>.dump

`dump(path, data, salt = "secret")`

```


```

#### <a name="JSPicklerload"></a>.load

`load(path, salt = "secret")`

```


```

#### <a name="JSPicklerunpickle"></a>.unpickle

`unpickle(path, salt = "secret")`

```


```



### <a name="pypickle"></a>pickle, pypickle [INDEVELOPMENT]



### <a name="jsCertPickler"></a>JSCertificateBasedPickler, jsCertPickler [INDEVELOPMENT]



# Current Status

- In development for pickle, pypickle, JSCertificateBasedPickler, jsCertPickler

# Todo

Check [.todo](./.todo) file for latest TODO list

<!-- # References -->

# License

The MIT License (MIT) - See [LICENSE](./LICENSE) for further details

Copyright © 2023 - till library works
