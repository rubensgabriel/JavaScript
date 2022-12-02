/*
    Prototype

    * prototype-based language
    * prototype chain
    * _proto_

*/


/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo
*/

console.log(Number('9') + 5) // Type conversion - Alteração manual de conversão de tipos

console.log('9' + 5) //Type coersion - Alteração automática do JavaScript para os valores serem do mesmo tipo(string)


/*
    Manipulando Strings e Números

    Transformar String em Número e Número em String
*/

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Cotar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo"
console.log(word.length)
let number2 = 1234
console.log(String(number2).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number3 = 215.1215454
console.log(number3.toFixed(2).replace(".", ","))

// Transforme letras minnúsculas em maiúsculas. Faça o contrário disso também

let word2 = "Programar é muito bacana!"
console.log(word2.toLowerCase().toLowerCase())
console.log(word2.toLowerCase().toUpperCase())

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor")) // Verificar se o texto contém a palavra Amor
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

