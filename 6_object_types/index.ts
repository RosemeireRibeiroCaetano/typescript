// 1 - Tipo de objeto para função com interface

interface Product {
    name: string 
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço  é R$${product.price}`)
    if(product.isAvailable) {
        console.log("O produto está disponível")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 29.99,
    isAvailable:true
}

showProductDetails(shirt)
showProductDetails({name: "Tênis", price: 249.99, isAvailable: false})
 

// 2 - Propriedades opcionais em interfaces

interface  User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1:User = {email: "Rosemeire@email.com", role: "Admin"}
const u2:User = {email: "João@email.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - Propriedades readonly

interface Car {
    brand: string
    readonly wheels: number

}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)



// 4 - Index Signature

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)


// 5 - Extending interface


interface Human {

    name: string
    age: number
}

interface SuperHuman extends Human {
    superPowers: string[]
}

const rose: Human = {

    name: "Rose",
    age: 34

}

console.log(rose)


const naruto: SuperHuman = {

    name: "Naruot",
    age: 13,
    superPowers: ["Rasenshuriken", "Kuchiyose", ]
} 

console.log(naruto)

console.log(naruto.superPowers[1])


// 6 - Intersection Types

interface Characte {
    name: string
}    

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Characte & Gun 

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "shortgun",
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - Readonly array

let myArray: ReadonlyArray<string> = ["Banana", "Maça", "Laranja"]

// myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Frutas: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})
console.log(myArray)


// 8 - Tuplas

type fiveNumbers = [number, number, number, number]

//number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
//const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Matheus", 30]

console.log(anotherUser[0])

anotherUser[0] = "João"

console.log(anotherUser[0])

// anotherUser[1] = "teste"
 

// 9 - Tuplas com readonly

function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])

}
showNumbers([1, 2])
