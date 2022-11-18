// Variáveis e tipos de dados
// declaração or declaration
var nome

// assignment or atribuição de valores
nome = "Rubens"

// que tipo de dado foi colocado na variável
console.log(typeof nome)

// agrupamento de declarações
let age, isHuman

age = 20
isHuman = true

// multiplos argumentos na função
// console.log(nome, age, isHuman)

// escrita de text + variáveis

// concatenando valores
console.log('o ' + nome + ' tem ' + age + ' anos')

// interpolando valores com template literals or template strings
console.log(`O ${nome} tem ${age} anos de idade`)

// Object

const person = {
    nome: 'Rubens',
    age: 20,
    weight: 81.6,
    isAdmin: true
}

console.log(`${person.nome} tem ${person.age} anos`)

// Array

const animals = [
    'Lion',
    'Monkey',
    {
        nome: 'Cat', // É possível declarar um objeto dentro de um array
        age: 3
    }
]

// acessar valores dentro do Array
console.log(animals[1])