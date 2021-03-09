"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var A = (function () {
    function A() {
    }
    A.prototype.hello = function () { };
    __decorate([
        Reflect.metadata('name', 'hello')
    ], A.prototype, "hello", null);
    A = __decorate([
        Reflect.metadata('name', 'A')
    ], A);
    return A;
}());
var objs = [A, new A, A.prototype];
var res = objs.map(function (obj) { return [
    Reflect.getMetadata('name', obj),
    Reflect.getMetadata('name', obj, 'hello'),
    Reflect.getOwnMetadata('name', obj),
    Reflect.getOwnMetadata('name', obj, 'hello')
]; });
console.log(objs);
