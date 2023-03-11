// 1 - Generics

function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))

// 2 - Constraint em Generics

function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Mesa", cor: "Branca"}
const otherProduct = {name: "Geladeira", cor: "Inox"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))



// 3 - Interfaces com Generics

interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: string
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = {name: "Fox", wheels: 4, engine: 1.0, color: "Preto"}
const myPen:Pen = {name: "Caneta Bic", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)

// 4 - Type parameters

function getSomeKey<T, k extends keyof T>(obj: T, key: k) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))



// 5 - Keyof Type Operator

type Character = {name: string, age: number, hasDrivelicense: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: "Rose",
    age: 34,
    hasDrivelicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))


// 6 - Typeof type operator

const userName: string = "Rose"

const userName2: typeof userName = "Eliana"

// const userName3: typeof userName = 14

type x = typeof userName

const userName4: x = "Vitor"


// 7 - Indexed access types

type Truck = {km: number, kg: number, description: string}

type km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: km) {
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

 const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km)


// 8 - Conditional expressions type

interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar:myType = 5
// const someVar2:myType = "teste"

type myTypeB = Teste extends {showNumber(): number } ? string : boolean


// 9 - Template literals type

type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text"
// const testing2: CustomType = "some text 2"

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}`| `${a2}`