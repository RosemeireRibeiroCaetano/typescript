"use strict";
//  1 - Exemplo decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertkey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertkey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("terminado execução do método");
    }
}
__decorate([
    myDecorator(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 - Múltiplos decorators
function a() {
    return function (target, propertkey, descriptor) {
        console.log("executou a.");
    };
}
function b() {
    return function (target, propertkey, descriptor) {
        console.log("executou b.");
    };
}
class MultiploDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    a(),
    b(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MultiploDecorators.prototype, "testing", null);
const multiple = new MultiploDecorators();
multiple.testing();
// 3 - Class decorator
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando usuário!");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec,
    __metadata("design:paramtypes", [String])
], User);
const rosemeire = new User("Rosemeire");
console.log(rosemeire);
//  4 - Method decorator
function enumerable(value) {
    return function (target, propertkey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
