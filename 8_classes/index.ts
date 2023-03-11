// 1 - Campos em classe

class User {
    name!: string
    age!: number
}

const rose = new User()

console.log(rose)

rose.name = "Rose"
// rose.job = "Programadora"

console.log(rose)


// 2 - Constructor

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name 
        this.age = age
    }
}

const vitor = new NewUser("Vitor", 14)

console.log(vitor)

// const heitor = new NewUser(8, 8)


// 3 - Campos readonly

class Car {
    name
    readonly wheels = 4 

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car("Fusca")

console.log(fusca.wheels)

fusca.name = "Fusca Turbo"

// fusca.wheels = 5


// 4 - Herança e super

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

class killerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new killerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)


// 5 - Métodos

class Dwarf {
    name 

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)

jimmy.greeting()

console.log(jimmy)
 
//  6 - O this

class Truck {
    model 
    hp 

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
    } 
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()


// 7 - Utilizando Getters

class Person {
    name 
    surname 

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + " " + this.surname
    }
}

const roseRibeiro = new Person("Rose", "Ribeiro")

console.log(roseRibeiro.name)

console.log(roseRibeiro.fullName)


// 8 - Utilizando setters

class Coords {
    
    x!: number
    y!: number

    set fillX(x: number) {
       if(x === 0) {
        return 
       } 

       this.x = x

       console.log("X inserido com sucesso")
    }

    set fillY(y: number) {
        if(y === 0) {
         return 
        } 
 
        this.y = y
 
        console.log("Y inserido com sucesso")
    }

    get getCoords() {
        return `X: ${this.fillX} e Y: ${this.fillY}`
    }
}

const mycoords = new Coords()

mycoords.fillX = 15
mycoords.fillY = 0
mycoords.fillY = 10

console.log(mycoords)
console.log(mycoords.getCoords)


// 9 - Herança de interfaces

interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    
    title 

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O título do post é: ${this.title}` 
    }
}

const myPost = new blogPost("Hello World")

console.log(myPost.title)

console.log(myPost.itemTitle())

class TestingInterface implements showTitle {

    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `O título é: ${this.title}`
    }
}


// 10 - Override de métodos

class Base {
    someMethod() {
        console.log("alguma coisa")
    }
}

class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa")
    }
}

const myObjct = new Nova()

myObjct.someMethod()


// 11 -Visibilidade: public

class C {
    public x = 10   
}

class D extends C{

}

const cInstance = new C()

console.log(cInstance.x)

const dInstancia = new D()

console.log(dInstancia.x)


// 12 - Visibilidade: Protected

class E {
    protected x = 10 

    protected protectedMethod() {
        console.log("Este método é protegido")
    }
}

class F extends E {
   
    showX() {
        console.log("x:" + this.x)
    }

    showProtectedMethos() {
        this.protectedMethod()
    }
}

const fInstance = new F()

fInstance.showX()

fInstance.showProtectedMethos()


// 13 - Visibilidade: private

class PrivateClass {
    private name = "Private"


    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("Método private")
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const pObj = new PrivateClass()

// console.log(pObj)

console.log(pObj.showName())

pObj.showPrivateMethod()


// 14 - static members

class staticMembers {
   static prop = "Teste static"

   static staticMethod() {
    console.log("Este é método estático")
   }
}

console.log(staticMembers.prop)

staticMembers.staticMethod()


// 15 - Generic class 

class Item<T, U> {
    first 
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }
    
    get showFirst() {
        return ` O first é: ${this.first}`
    }

}

const newItem = new Item("caixa", "supresa")

console.log(newItem)

console.log(newItem.showFirst)

console.log( typeof newItem.showFirst)

const secondItem = new Item(12, true)

console.log(secondItem.showFirst)

console.log(typeof secondItem.first)


// 16 - Parameters properties

class ParameterProperties {
    constructor(public name: string, private qty: number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `Qtd total: ${this.qty}`
    }

    get showPrice() {
        return ` Valor: ${this.price}`
    }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99) 
  
    console.log(newShirt.name)
    console.log(newShirt.showPrice)
    console.log(newShirt.showQty)


  // 17 - class Expressions  

  const myClass = class<T> {
    name 

    constructor(name: T) {
        this.name = name
    }
  }

  const pessoa = new myClass("Heitor");

  console.log(pessoa);
  console.log(pessoa.name)

  // 18 - Abstract class

  abstract class AbstracClass {
    abstract showName(): void;
  }

class AbstractExample extends AbstracClass {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    showName() {
        console.log(` O nome é: ${this.name}`);
    }
}

const newAbstractObject = new AbstractExample("Rose");

newAbstractObject.showName();

// 19- Relações entre classes;

class Dog {
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho)