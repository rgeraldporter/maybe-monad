"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $$JustSymbol = Symbol();
var $$NothingSymbol = Symbol();

var Just = function Just(x) {
    var _ref;

    return _ref = {
        inspect: function inspect() {
            return "Just(" + x + ")";
        },
        map: function map(f) {
            return Maybe.of(f(x));
        },
        fmap: function fmap(f) {
            return Maybe.of(f(x));
        },
        ap: function ap(y) {
            return y.map(x);
        },
        chain: function chain(f) {
            return f(x);
        },
        bind: function bind(f) {
            return f(x);
        },
        flatMap: function flatMap(f) {
            return f(x);
        },
        join: function join() {
            return x;
        },
        emit: function emit() {
            return x;
        },
        fork: function fork(_, g) {
            return g(x);
        },
        forkL: function forkL(_) {
            return Nothing();
        },
        forkR: function forkR(f) {
            return f(x);
        },
        sequence: function sequence(of) {
            return x.map(Maybe.of);
        }
    }, _defineProperty(_ref, $$JustSymbol, true), _defineProperty(_ref, $$NothingSymbol, false), _ref;
};

var Nothing = function Nothing(_) {
    var _ref2;

    return _ref2 = {
        inspect: function inspect() {
            return "Nothing";
        },
        map: function map(_) {
            return Nothing();
        },
        fmap: function fmap(_) {
            return Nothing();
        },
        ap: function ap(_) {
            return Nothing();
        },
        chain: function chain(_) {
            return Nothing();
        },
        bind: function bind(_) {
            return Nothing();
        },
        flatMap: function flatMap(_) {
            return Nothing();
        },
        join: function join() {
            return Nothing();
        },
        emit: function emit() {
            return Nothing();
        },
        fork: function fork(f, _) {
            return f();
        },
        forkL: function forkL(f) {
            return f();
        },
        forkR: function forkR(_) {
            return Nothing();
        },
        sequence: function sequence(of) {
            return of(Nothing());
        }
    }, _defineProperty(_ref2, $$JustSymbol, false), _defineProperty(_ref2, $$NothingSymbol, true), _ref2;
};

var Maybe = {
    of: function of(x) {
        return x === null || x === undefined || x[$$NothingSymbol] ? Nothing() : Just(x);
    }
};

module.exports = { Maybe: Maybe, Nothing: Nothing, Just: Just };