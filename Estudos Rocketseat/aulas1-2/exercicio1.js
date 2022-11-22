// 1. Declare uma variável de nome weigth
let weith = 78.5

// 2. Que tipo de dado é a variável acima?
console.log(typeof weith)
// number

/* 
   3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * weith: Number (float)
        * isSubscribed: Boolean
*/
let nome, age, stars, isSubscribed
nome = 'Rubens'
age = 20
stars = 8.7
isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dados?
    // object
    
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weith> kg.

    Atenção, substitua <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    nome : 'Rubens',
    age : 20,
    weith : 81.2,
    isSubscribed : true
};
console.log(`${student.nome} de idade ${student.age} pesa ${student.weith} kg`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/* 
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4, (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/
students = [
    student
]

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
    nome : "John",
    age : 38,
    weith: 78.4,
    isSubscribed : true
}

students[1] = john
console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1

    // Pelo console.log ser executado antes da atribuição o resultado nessa linha será undefined, porém depois quando o valor é atribuido à variável ela passa a valer 1 em todo o código. O código é executado normamente porque "a" é declarado como var(global), o que significa que mesmo sem o valor ser atribuido no console ele ainda é capaz de reconhecer que existe uma variável "a" no código
*/
    console.log(a)
    var a = 1