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