// @ts-nocheck
/**
 * Aula: 4.3 - Escopo de variáveis e funções
 * Author: Glaucia Lemos
 * Data: 07/10/2020
 */

// ==> Exemplo de escopo global

const myvar = 1;

function myFunction() {
    return myvar;
};

console.log(myvar);

// ==> Exemplo de escopo local

function otherFunction() {
    var otherVar = true;
    return otherVar;
};

console.log(otherVar); // não retornará porque a declaração dessa variável foi dentro da função (escopo local).