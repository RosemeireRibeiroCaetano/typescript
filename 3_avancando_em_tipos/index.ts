// 1 - Arrays 

let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);


// number = "teste"

const nomes: string[] = ["Rose", "Rafa"];

// nomes.push(4)


// 2 - Outra sintaxe de arrays
 
const nums: Array<number> = [100, 200];

nums.push(300)

console.log(nums)

console.log(nums[0])


// 3 - Any

const arr1: any = [1, "teste", true, [], {nome: "Rose"}];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1)


// 4 -Parametros tipados

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)


// 5 - Retorno de funçâo

function greetion(name: string) {
    return `Olá ${name}`
}
console.log(greetion("Rose"));


/// 6 - Funcao anônima

setTimeout(function() {

    const sallary: number = 1000

    // console.log(parseFloat(sallary))

    // console.log(sallary)

}, 2000)

// 7 - Tipos de Objetos

function passCoordinates(coord: {x: number, y: number}) {
    console.log("x coordinates: " + coord.x)
    console.log("x coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)
// passCoordinates({nome: 1, sobrenome: 2})

const pessoaObj:{nome: string, surname: string} = {nome: "Rose", surname: "Battisti"}


// 8 - props opcionais

function showNumbers1(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    console.log("C " + c)
    
}
showNumbers1(1, 2, 3)



// Outo exemplo

function showNumbers2(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c) {
        console.log("C: " + c)
    }
    
}
showNumbers2(1, 2, 3)
showNumbers2(4, 5)

// 9 - Validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {

    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Rosemeire", "Ribeiro"))
console.log(advancedGreeting("Caetano"))


// 10 - Union type

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}
showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [1, "teste", true]


// Avançando com Union Types

function showUserRole(role: boolean | string) {
    if(typeof role === "boolean")
    return "Usuário não aprovado!"

    return `À função do usuário é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))


// 12 - Type alias

type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}
showId(1)
showId("200")


// 13 - interface

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)


// 14 - interface x type alias

interface Person {
  name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Rose", age: 34}

console.log(somePerson)


type personType  = {
    name: string
}

// type personType = {
//     age: number
// }



//  15 - Literal types

let test: "testando"

test = "testando"

console.log(test) 

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

// 16 - Non null assertion operators

const p = document.getElementById("some-p")

console.log(p!.innerText)


// 18 - Symbol

let symbolA: symbol = Symbol("a") 
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)

