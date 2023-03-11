// 1 - Generics
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(5));
console.log(showData("testando generic"));
// 2 - Constraint em Generics
function showProductName(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
var myObj = { name: "Mesa", cor: "Branca" };
var otherProduct = { name: "Geladeira", cor: "Inox" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
var myCar = { name: "Fox", wheels: 4, engine: 1.0, color: "Preto" };
var myPen = { name: "Caneta Bic", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat(key, " est\u00E1 presente no objeto e tem o valor de ").concat(obj[key]);
}
var server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return "".concat(obj[name]);
}
var myChar = {
    name: "Rose",
    age: 34,
    hasDrivelicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// 6 - Typeof type operator
var userName = "Rose";
var userName2 = "Eliana";
var userName4 = "Vitor";
var newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log("O ve\u00EDculo tem a km de: ".concat(km));
}
showKm(newTruck.km);
var newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
var someVar = 5;
var testing = "some text";
