// 1 - importação de arquivos
import importGreet from './greet.js'

importGreet();


// 2 - import de variável

import {x} from './variable'

console.log(x)

// 3 - multiplas importações

import {a, b, myFunction} from "./9_multiple"

console.log(a)
console.log(b)

myFunction()

// 4 - alias

import { someName as name} from './changename';

console.log(name)

// 5 - import all

import * as myNumbers from './numbers'

console.log(myNumbers)

const nX = myNumbers.n1;

console.log(nX)

myNumbers.showNumber();

// 6 import tipos

import { Human } from './mytype';

class User implements Human {
    name
    age 

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }
}

const rose = new User("Rose", 34)

console.log(rose)


