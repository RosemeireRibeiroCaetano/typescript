// 1 - Numbers

let primeiroNumero: number = 10

console.log(primeiroNumero)

primeiroNumero = 16

console.log(typeof primeiroNumero)  

const segundoNumero: number = 15.5848484  
  
console.log(typeof segundoNumero)

console.log(segundoNumero.toPrecision(3))           



// 2 - string

const fistName: string = "Rosemeire"
console.log(fistName.toUpperCase())

let fullName: string

const lastName: string = "Ribeiro"

fullName = fistName + " " + lastName

console.log(fullName)

console.log(typeof fullName)


// 3 boolean 

let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

/// 4 Annotation e Inference

const ann: string = "teste"

const inf = "teste"

//  ann = 1   
//  inf = 1

console.log("Testando 2")

// Desafio 2

let numero_1: number = 10;

let numero_2 = String(numero_1);

let printMyNumber: string = `Eu vou imprimir o número ${numero_2}`;

console.log(printMyNumber)
