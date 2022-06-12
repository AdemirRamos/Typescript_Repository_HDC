//Em um arquivo TS, se pode escrever código JS ou TS.

//const x = 10

//Atribuindo tipos a uma variável:

const x: number = 10

//Caso se tente alterar uma variável de um tipo para um tipo incompatível ao original declarado, ocorrerá um erro:

//let a: number = 5
//a = 'abc'

//No arquivo de configuração, o parâmetro "target" diz respeito a versão do JS que será gerada;
//Quanto mais antiga for a versão, mais chances ela terá de se adaptar a navegadores desatualizados.

//O comando (sem aspas) "tsc -w" faz a compilação do arquivo em tempo real.

//Como definir variáveis: inferência X "annotation":

/*Inferência:*/ const y = 10
/*"Annotation":*/ const z:number = 11

//Mesmo com o método de inferência, uma variável de um tipo não pode receber um valor conflitante com o tipo declarado.
//No exemplo acima, a "const y" não pode receber um valor diferente de um número.

//Tipos básicos:

let firstName: string = 'Ademir'
let age: number = 25
const isAdmin: boolean = true

//Em JS, os tipos são escritos com letras minúsculas ("string") e os objetos com letras maiúsculas ("String").

//Objetos:

/*Array:*/ const myNumbers: number[] = [1, 2, 3] /*O nome após dois pontos é facultativo, porém as chaves não.*/

/*Tuplas:*/ let myTuple: [number, string, string[]] /*Dentro dos parênteses vão os tipos presentes na Tupla*/
myTuple = [25, 'Ademir', ['a', 'b']] //Os itens do "array" devem vir na mesma ordem na qual são declarados na tipagem.

/*Objetos Literais:*/ const user: {name: string, age: number} = {
    name: 'Ademir',
    age: 25

    //Novamente: a ordem de declaração na tipagem deve ser a mesma ordem de reprodução.
}

//O tipo "any" pertence somente ao TS - esse tipo aceita qualquer valor:

let a: any = 0
a = 'abc'
a = true
a = []

//Já o "union type" nos permite misturar tipos para uma maior precisão na tipagem:

let id: string | number = 'abc10'
id = 200

//O "type alias" nos permite determinar o nome de um tipo.

type myIdType = string | number

const userID: myIdType = 10
const productID: myIdType = '00001'

//O "enum" enumera uma coleação para que essa possa ter os seus dados usados de maneira mais simples:

enum Size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}

const camisa = {
    name: 'Camisa Gola V',
    size: Size.G
}

//O "Literal Types" nos permite determinar um valor a partir de um tipo:

let test: 'autenticado' | null
test = 'autenticado' //A variável com essa tipagem só aceita o valor referente ao seu tipo declarado.

//Funções:

function sum(a: number, b: number) {
    return a + b

    //Os tipos do parâmetros devem ser declarados.
}

console.log(sum(12, 12))

//Também é possível tipar o retorno da função:

function sayHello(name: string): string {
    return `Hello ${name}`
}

console.log(sayHello('Ademir'))

//Também é possível tipar funções que não retornam nada:

/*

function logger(msg: string) {
    console.log(msg)
}

Apesar d'a função poder ser declarada da maneira acima, o mais recomendável é usar o tipo "void":

*/

function logger(msg: string): void {
    console.log(msg)
}

console.log(logger('Olá!'))

//Para parâmetros opicionais (em funções) se usa "?":

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá, ${greet}, ${name}!`)
    }

    else {
        console.log(`Olá, ${name}!`)
    }
}

console.log(greeting('Ademir'))
console.log(greeting('Ademir', 'Sir.'))

//Interface: nos permite padronizar algo para reutilizá-lo como um tipo - há vários modelos para serem usados:

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(numbers: MathFunctionParams) {
    return numbers.n1 + numbers.n2
}

console.log(sumNumbers({n1: 5, n2: 5}))

function multiplyNumbers(numbers: MathFunctionParams) {
    return numbers.n1 * numbers.n2
}

console.log(multiplyNumbers({n1: 6, n2: 6}))

//Também se pode usar as interfaces com variáveis:

/*

const somar_números: MathFunctionParams {

}

*/
