const stack = {
    _elements: [],
    get elements() {
        return this._elements;
    },
    set addEl(el) {
        this._elements.push(el);
        return el;
    },
    get removeEl() {
        return this._elements.pop();
    },
};

const queue = {
    _elements: [],
    get elements() {
        return this._elements;
    },
    set addEl(el) {
        this._elements.push(el);
        return el;
    },
    get removeEl() {
        return this._elements.shift();
    },
};
