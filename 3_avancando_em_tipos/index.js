// 1 - Arrays 
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// number = "teste"
var nomes = ["Rose", "Rafa"];
// nomes.push(4)
// 2 - Outra sintaxe de arrays
var nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[0]);
// 3 - Any
var arr1 = [1, "teste", true, [], { nome: "Rose" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 -Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - Retorno de funçâo
function greetion(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greetion("Rose"));
/// 6 - Funcao anônima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - Tipos de Objetos
function passCoordinates(coord) {
    console.log("x coordinates: " + coord.x);
    console.log("x coordinates: " + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// passCoordinates({nome: 1, sobrenome: 2})
var pessoaObj = { nome: "Rose", surname: "Battisti" };
// 8 - props opcionais
function showNumbers1(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C " + c);
}
showNumbers1(1, 2, 3);
// Outo exemplo
function showNumbers2(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers2(1, 2, 3);
showNumbers2(4, 5);
// 9 - Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting("Rosemeire", "Ribeiro"));
console.log(advancedGreeting("Caetano"));
// 10 - Union type
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "teste", true];
// Avançando com Union Types
function showUserRole(role) {
    if (typeof role === "boolean")
        return "Usuário não aprovado!";
    return "\u00C0 fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: "Rose", age: 34 };
console.log(somePerson);
// type personType = {
//     age: number
// }
//  15 - Literal types
var test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection("left");
// 16 - Non null assertion operators
var p = document.getElementById("some-p");
console.log(p.innerText);
// 18 - Symbol
var symbolA = Symbol("a");
var symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
