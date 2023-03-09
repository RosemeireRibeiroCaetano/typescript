// 1 - Void

function whithoutReturn():void {
    console.log("Esta função não tem retorno!")
}

whithoutReturn()


// 2 - Callback como algumento

function greeting(name: string) {
    return `Òlá ${name}`
}
 function preGreeting(f: (name: string) => string, userName:string) {
    
    console.log("Preparando a função")

    const greet = f(userName)

    console.log(greet)
 }

preGreeting(greeting, "Rose")
preGreeting(greeting, "João ")


// 3 - Generic function

function firstElement<T>(arr: T[]): T {
    return arr[0]
} 

console.log(firstElement([1, 2,3]))
console.log(firstElement(["a", "b", "c"]))

function mergeOjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newOject = mergeOjects({name: "Rose"}, {age: 30, job: "Programmer"})

console.log(newOject)


// 4 - Constraints nas  Generic functions
 
function biggesNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if(+a > +b) {
        biggest = a
    }else {
        biggest = b
    }

    return biggest
}

console.log(biggesNumber(5, 3))
console.log(biggesNumber("12", "5"))


// 5 - Especificar tipo de argumento

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [5, 6]))
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]))

// 6 - Parâmetro opcional

function modernGreeting(name: string, greet?: string) { 

    if(greet) {
        return `Olá ${greet} ${name}, tudo bem?`
    }

return `Olá ${name}, tudo bem?`

}

console.log(modernGreeting("Rose"))
console.log(modernGreeting("Pedro", "Dr."))

// 7 - Parâmetros default

function somaDefault(n: number, m = 10): number {
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(15, 12))

// 8 - unknown

function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x == "number") {
        console.log("x é um número")
    }
}

doSomething([1, 2, 3])
doSomething(5)

// 9 - never

function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

// showErrorMessage("Algum erro!")


// 10 - Rest operator

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(5, 348, 2348)) 


// 11 - Destructuring como parâmetro

function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do  produto é ${name} e ele custa R$${price}`
}

const shirt = { name: "Camisa", price: 49.99}

console.log(showProductDetails(shirt))
// console.log(showProductDetails({name: "teste",age: 30}))
// console.log(showProductDetails([1, 2, 3]))