// 1 - Campos em classe
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var rose = new User();
console.log(rose);
rose.name = "Rose";
// rose.job = "Programadora"
console.log(rose);
// 2 - Constructor
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var vitor = new NewUser("Vitor", 14);
console.log(vitor);
// const heitor = new NewUser(8, 8)
// 3 - Campos readonly
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var fusca = new Car("Fusca");
console.log(fusca.wheels);
fusca.name = "Fusca Turbo";
// fusca.wheels = 5
// 4 - Herança e super
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var trator = new Machine("Trator");
var killerMachine = /** @class */ (function (_super) {
    __extends(killerMachine, _super);
    function killerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    return killerMachine;
}(Machine));
var destroyer = new killerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - Métodos
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("Hey Stranger!");
    };
    return Dwarf;
}());
var jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
//  6 - O this
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo: ".concat(this.model, ", que tem ").concat(this.hp, " cavalos de pot\u00EAncia"));
    };
    return Truck;
}());
var volvo = new Truck("Volvo", 400);
var scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - Utilizando Getters
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.name + " " + this.surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var roseRibeiro = new Person("Rose", "Ribeiro");
console.log(roseRibeiro.name);
console.log(roseRibeiro.fullName);
// 8 - Utilizando setters
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillX", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log("X inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillY", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log("Y inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoords", {
        get: function () {
            return "X: ".concat(this.fillX, " e Y: ").concat(this.fillY);
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var mycoords = new Coords();
mycoords.fillX = 15;
mycoords.fillY = 0;
mycoords.fillY = 10;
console.log(mycoords);
console.log(mycoords.getCoords);
var blogPost = /** @class */ (function () {
    function blogPost(title) {
        this.title = title;
    }
    blogPost.prototype.itemTitle = function () {
        return "O t\u00EDtulo do post \u00E9: ".concat(this.title);
    };
    return blogPost;
}());
var myPost = new blogPost("Hello World");
console.log(myPost.title);
console.log(myPost.itemTitle());
var TestingInterface = /** @class */ (function () {
    function TestingInterface(title) {
        this.title = title;
    }
    TestingInterface.prototype.itemTitle = function () {
        return "O t\u00EDtulo \u00E9: ".concat(this.title);
    };
    return TestingInterface;
}());
// 10 - Override de métodos
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("alguma coisa");
    };
    return Base;
}());
var Nova = /** @class */ (function (_super) {
    __extends(Nova, _super);
    function Nova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nova.prototype.someMethod = function () {
        console.log("Testando outra coisa");
    };
    return Nova;
}(Base));
var myObjct = new Nova();
myObjct.someMethod();
// 11 -Visibilidade: public
var C = /** @class */ (function () {
    function C() {
        this.x = 10;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var cInstance = new C();
console.log(cInstance.x);
var dInstancia = new D();
console.log(dInstancia.x);
// 12 - Visibilidade: Protected
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    E.prototype.protectedMethod = function () {
        console.log("Este método é protegido");
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log("x:" + this.x);
    };
    F.prototype.showProtectedMethos = function () {
        this.protectedMethod();
    };
    return F;
}(E));
var fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethos();
// 13 - Visibilidade: private
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = "Private";
    }
    PrivateClass.prototype.showName = function () {
        return this.name;
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log("Método private");
    };
    PrivateClass.prototype.showPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var pObj = new PrivateClass();
// console.log(pObj)
console.log(pObj.showName());
pObj.showPrivateMethod();
// 14 - static members
var staticMembers = /** @class */ (function () {
    function staticMembers() {
    }
    staticMembers.staticMethod = function () {
        console.log("Este é método estático");
    };
    staticMembers.prop = "Teste static";
    return staticMembers;
}());
console.log(staticMembers.prop);
staticMembers.staticMethod();
// 15 - Generic class 
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Item.prototype, "showFirst", {
        get: function () {
            return " O first \u00E9: ".concat(this.first);
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var newItem = new Item("caixa", "supresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);
var secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 - Parameters properties
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Object.defineProperty(ParameterProperties.prototype, "showQty", {
        get: function () {
            return "Qtd total: ".concat(this.qty);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperties.prototype, "showPrice", {
        get: function () {
            return " Valor: ".concat(this.price);
        },
        enumerable: false,
        configurable: true
    });
    return ParameterProperties;
}());
var newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17 - class Expressions  
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var pessoa = new myClass("Heitor");
console.log(pessoa);
console.log(pessoa.name);
// 18 - Abstract class
var AbstracClass = /** @class */ (function () {
    function AbstracClass() {
    }
    return AbstracClass;
}());
var AbstractExample = /** @class */ (function (_super) {
    __extends(AbstractExample, _super);
    function AbstractExample(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AbstractExample.prototype.showName = function () {
        console.log(" O nome \u00E9: ".concat(this.name));
    };
    return AbstractExample;
}(AbstracClass));
var newAbstractObject = new AbstractExample("Rose");
newAbstractObject.showName();
// 19- Relações entre classes;
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var doguinho = new Cat();
console.log(doguinho);
