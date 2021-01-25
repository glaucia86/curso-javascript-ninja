// @ts-nocheck
/**
 * Aula: 5.2 - Parâmetros de Funções com arrays e objetos
 * Author: Glaucia Lemos
 * Data: 24/01/2021
 */

// ==> Exemplo 01: 
let arrayNumeros = [1,5,6,9];

function myFunction(arg) {
    return arg;
};

console.log(myFunction(arrayNumeros)); 

// ==> Exemplo 02: 

let pessoa = {
    nome: 'Glaucia',
    curso: 'JavaScript',
    ninja: true 
};

console.log(pessoa);

function myFunction2(arg) {
    return arg;
};

console.log(myFunction2(pessoa).curso);