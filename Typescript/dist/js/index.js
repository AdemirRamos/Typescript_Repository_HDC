"use strict";
//Em um arquivo TS, se pode escrever código JS ou TS.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//const x = 10
//Atribuindo tipos a uma variável:
const x = 10;
//Caso se tente alterar uma variável de um tipo para um tipo incompatível ao original declarado, ocorrerá um erro:
//let a: number = 5
//a = 'abc'
//No arquivo de configuração, o parâmetro "target" diz respeito a versão do JS que será gerada;
//Quanto mais antiga for a versão, mais chances ela terá de se adaptar a navegadores desatualizados.
//O comando (sem aspas) "tsc -w" faz a compilação do arquivo em tempo real.
//Como definir variáveis: inferência X "annotation":
/*Inferência:*/ const y = 10;
/*"Annotation":*/ const z = 11;
//Mesmo com o método de inferência, uma variável de um tipo não pode receber um valor conflitante com o tipo declarado.
//No exemplo acima, a "const y" não pode receber um valor diferente de um número.
//Tipos básicos:
let firstName = 'Ademir';
let age = 25;
const isAdmin = true;
//Em JS, os tipos são escritos com letras minúsculas ("string") e os objetos com letras maiúsculas ("String").
//Objetos:
/*Array:*/ const myNumbers = [1, 2, 3]; /*O nome após dois pontos é facultativo, porém as chaves não.*/
/*Tuplas:*/ let myTuple; /*Dentro dos parênteses vão os tipos presentes na Tupla*/
myTuple = [25, 'Ademir', ['a', 'b']]; //Os itens do "array" devem vir na mesma ordem na qual são declarados na tipagem.
/*Objetos Literais:*/ const user = {
    name: 'Ademir',
    age: 25
    //Novamente: a ordem de declaração na tipagem deve ser a mesma ordem de reprodução.
};
//O tipo "any" pertence somente ao TS - esse tipo aceita qualquer valor:
let a = 0;
a = 'abc';
a = true;
a = [];
//Já o "union type" nos permite misturar tipos para uma maior precisão na tipagem:
let id = 'abc10';
id = 200;
const userID = 10;
const productID = '00001';
//O "enum" enumera uma coleação para que essa possa ter os seus dados usados de maneira mais simples:
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Camisa Gola V',
    size: Size.G
};
//O "Literal Types" nos permite determinar um valor a partir de um tipo:
let test;
test = 'autenticado'; //A variável com essa tipagem só aceita o valor referente ao seu tipo declarado.
//Funções:
function sum(a, b) {
    return a + b;
    //Os tipos do parâmetros devem ser declarados.
}
console.log(sum(12, 12));
//Também é possível tipar o retorno da função:
function sayHello(name) {
    return `Hello, ${name}!`;
}
console.log(sayHello('Ademir'));
//Também é possível tipar funções que não retornam nada:
/*

function logger(msg: string) {
    console.log(msg)
}

Apesar d'a função poder ser declarada da maneira acima, o mais recomendável é usar o tipo "void":

*/
function logger(msg) {
    console.log(msg);
}
console.log(logger('Olá!'));
//Para parâmetros opicionais (em funções) se usa "?":
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá, ${greet} ${name}!`);
    }
    else {
        console.log(`Olá, ${name}!`);
    }
}
console.log(greeting('Ademir'));
console.log(greeting('Ademir', 'Sir.'));
function sumNumbers(numbers) {
    return numbers.n1 + numbers.n2;
}
console.log(sumNumbers({ n1: 5, n2: 5 }));
function multiplyNumbers(numbers) {
    return numbers.n1 * numbers.n2;
}
console.log(multiplyNumbers({ n1: 6, n2: 6 }));
//Também se pode usar as interfaces com variáveis:
const somar_números = {
    n1: 7,
    n2: 7
};
console.log(multiplyNumbers(somar_números));
//"Narrowing:" consiste em checagem de tipos. - Para um exemplo extra, verifique o exemplo acima com o parâmetro "greet".
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}.`);
        return;
    }
    else {
        console.log('Não foi passado nenhum número.');
    }
}
doSomething(5);
doSomething(true);
//"Generics": nos permitem executar um função independentemente do tipo de dado. - Também é possível restringir o tipo de dado.
function showArrayItems(vetor) {
    vetor.forEach(element => {
        console.log(`Item: ${element}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);
//Classes:
class User {
    constructor(name, role, isApproved, age) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
        this.age = age;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}.`);
    }
    showUserAge(canShow) {
        if (canShow) {
            console.log(`A idade do usuário é: ${this.age}.`);
            return;
        }
        else {
            console.log('O usuário não informou a idade.');
        }
    }
}
const zeca = new User('Zeca', 'Admin', true, 25);
console.log(zeca);
zeca.showUserName();
console.log(zeca.showUserAge(true));
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}.`);
    }
}
const fusca = new Car('volkswagen', 4);
fusca.showBrand();
//Herança:
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const carro = new SuperCar('BMW', 4, 2.0);
console.log(carro);
carro.showBrand();
//Decorator: esse recurso é muito utilizado no TS para a validação de dados;
//Ou construção de um evento observável em algum ponto determinado de uma classe/função.
//Para usar esse recurso, é preciso ir até o arquivo de configuração TS e ativar o parâmetro "experimentalDecorators".
//"Decorators" nos ajudam a criar um "id" e outras informações independentemente do usuário.
function baseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
//Para se implementar um "decorator", usamos "@":
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParameters()
], Person);
const pessoa = new Person('Ademir');
console.log(pessoa);
