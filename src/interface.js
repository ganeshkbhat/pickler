


function InterfacePickle(args) {
    this.processArgs = () => { return new Error("Interface not applied") }
    this.Pickler = () => { return new Error("Interface not applied") }
    this.Unpickler = () => { return new Error("Interface not applied") }
    this.load = () => { return new Error("Interface not applied") }
    this.persistent_load = () => { return new Error("Interface not applied") }
    this.find_class = () => { return new Error("Interface not applied") }
    this.PickleBuffer = () => { return new Error("Interface not applied") }
    this.raw = () => { return new Error("Interface not applied") }
    this.release = () => { return new Error("Interface not applied") }
}


module.exports.InterfacePickle = InterfacePickle;
