/*
    Manipulando Arrays

    Criar Array com construtor
*/

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Contar elementos de um array

console.log([
    "a",
    {type: "array"},
    function() {return "alo"},
].length)

// Transformar uma cadeia de caracteres em elementos de um array

let word = "aniquilação"
console.log(Array.from(word))

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice())
// remover 1 ou mais items em qualquer posição do array
// encontrar a posição de um elemento do array

//console.log(techs)