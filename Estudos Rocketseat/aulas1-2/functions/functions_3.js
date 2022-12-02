// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

// funtion scope

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log()
console.log(subject)

// function hoisting

sayMyName()

function sayMyName() {
    console.log('Rubens')
}

// arrow funtion
// Forma alternativa de declarar uma função "=>"

const sayMyName2 = (name) => {
    console.log(name)
}

sayMyName2('Gabriel')

// callback function

function sayMyName3(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName3(
    () => {
        console.log('estou em uma callback')
    }
)

/*
    Funtion() construtor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const rubens = new Person("Rubens")
const gabriel = new Person("Gabriel")
console.log(rubens.walk())
console.log(gabriel.walk())

let date = new Date("2022-12-02")

console.log(date)

