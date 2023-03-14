//  1 - Exemplo decorator

function myDecorator() {

    console.log("Iniciando decorator!")

    return function(
        target: any, 
        propertkey: string, 
        descriptor: PropertyDescriptor
        ) {

        console.log("Executando decorator")
        console.log(target);
        console.log(propertkey);
        console.log(descriptor);
    };   
}

class myClass {
    @myDecorator()
    testing() {
        console.log("terminado execução do método");
    }
}

const myObj = new myClass()

myObj.testing();


// 2 - Múltiplos decorators

function a() {
    return function(target: any, 
        propertkey: string, 
        descriptor: PropertyDescriptor
        ) {
        console.log("executou a.");
    };
}

function b() {
    return function(
        target: any, 
        propertkey: string, 
        descriptor: PropertyDescriptor
        ) {
        console.log("executou b.")
    }
}

class MultiploDecorators {
    @a()
    @b()
    testing() {
        console.log("Terminando execução");
    }
}

const multiple = new MultiploDecorators();

multiple.testing();


// 3 - Class decorator

function classDec(constructor: Function) {
    console.log(constructor.name);
    if(constructor.name === "User") {
        console.log("Criando usuário!");
    }
}

@classDec
class User {
    name 

    constructor(name: string) {
        this.name = name;
    }
}

const rosemeire = new User("Rosemeire");

console.log(rosemeire);


//  4 - Method decorator

function enumerable(value: boolean) {
    return function(
        target: any, 
        propertkey: string, 
        descriptor: PropertyDescriptor
        ) {
        descriptor.enumerable = value;
    };
}


class Machine {
    name 

    constructor(name: string) {
        this.name = name
    }

   @enumerable(false)
    showName() {
        console.log(this)
        return `O nome da máquina é: ${this.name}`;
    }
}

const trator = new Machine("Trator");

console.log(trator.showName())
