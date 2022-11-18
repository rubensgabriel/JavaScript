/* Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const
*/
const clima = "Quente"
clima = "Frio" // Dará erro pois não se pode atribuir novos valores à constantes

console.log(clima)

/* O JS é uma linguagem fracamente tipada e dinâmica

* Variáveis não precisam ter um tipo previamente definido
* Podemos mudar o conteúdo da variável
* Variáveis alteram de tipo de acordo com o que você atribuir a elas

*/
let tempo = true // boolean
tempo = "" // string
tempo = 0 // number

console.log(typeof tempo)
