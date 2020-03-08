function Component(options) {
    
}
Component.prototype.setState = function (key, newVal) {
    if (newVal == this._data[key]) {
        return;
    }
    this._data[key] = newVal;
    dep.notify(key);
}
export default Component;