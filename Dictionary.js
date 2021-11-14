function Dictionary() {
    this.items = [];
    Dictionary.prototype.set = function (key, value) {
        this.items[key] = value;
    }
    Dictionary.prototype.has = function (value){
        return value in this.items;
    }
}

let a = new Dictionary();
a.set(0,12);
console.log(a.has(0));
