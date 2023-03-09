// 1 - Numbers
var primeiroNumero = 10;
console.log(primeiroNumero);
primeiroNumero = 16;
console.log(typeof primeiroNumero);
var segundoNumero = 15.5848484;
console.log(typeof segundoNumero);
console.log(segundoNumero.toPrecision(3));
// 2 - string
var fistName = "Rosemeire";
console.log(fistName.toUpperCase());
var fullName;
var lastName = "Ribeiro";
fullName = fistName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 boolean 
var a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
/// 4 Annotation e Inference
var ann = "teste";
var inf = "teste";
//  ann = 1   
//  inf = 1
console.log("Testando 2");
// Desafio 2
var numero_1 = 10;
var numero_2 = String(numero_1);
var printMyNumber = "Eu vou imprimir o n\u00FAmero ".concat(numero_2);
console.log(printMyNumber);
