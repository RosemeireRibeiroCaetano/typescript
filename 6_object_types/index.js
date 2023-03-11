// 1 - Tipo de objeto para função com interface
function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o  \u00E9 R$").concat(product.price));
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
var shirt = {
    name: "Camisa",
    price: 29.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 249.99, isAvailable: false });
function showUserDetails(user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(user.role));
    }
}
var u1 = { email: "Rosemeire@email.com", role: "Admin" };
var u2 = { email: "João@email.com" };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
var rose = {
    name: "Rose",
    age: 34
};
console.log(rose);
var naruto = {
    name: "Naruot",
    age: 13,
    superPowers: ["Rasenshuriken", "Kuchiyose",]
};
console.log(naruto);
console.log(naruto.superPowers[1]);
var arnold = {
    name: "Arnold",
    type: "shortgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - Readonly array
var myArray = ["Banana", "Maça", "Laranja"];
// myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach(function (item) {
    console.log("Frutas: " + item);
});
myArray = myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
//number[]
var myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
//const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]
console.log(myNumberArray);
var anotherUser = ["Matheus", 30];
console.log(anotherUser[0]);
anotherUser[0] = "João";
console.log(anotherUser[0]);
// anotherUser[1] = "teste"
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
