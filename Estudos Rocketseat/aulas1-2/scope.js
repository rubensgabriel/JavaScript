/*
# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement
```js
// vamos iniciar um bloco
{
    aqui dentro é um bloco e poddo colocar qualquer código
} aqui fechamos o bloco
```
O bloco, também criará um novo escopo.Chamamos de `block-scoped`
*/


/* 
## var
```js
// var é global e poderá funcionar fora de um escopo de bloco
*/
console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ',x)


/* 
##let e const
```js
// const e let são locais e só funcionam no escopo onde foi criada
*/
console.log('> existe y antes do bloco? ', y)

{
    let y = 0
    console.log('> existe y dentro do bloco? ', y)
}

console.log('> existe y depois do bloco ', y)

/* 
## Para criar nomes

* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais: $ _
    * Iniciar com letras
    * Colocar acentos
    * Letras maíusculas e minúsculas fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome

- Ideal:
    * Criar nomes que fazem sentido
    * Que explique o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês
*/