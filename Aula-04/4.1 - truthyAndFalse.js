// @ts-nocheck
/**
 * Aula: 4.1 - Truthy and False
 * Author: Glaucia Lemos
 * Data: 07/10/2020
 */

// ==> Exemplos de Falsy

let teste;

if('') {
    teste = true;
} else {
    teste = false;
}

console.log(teste); // retorna false

let teste2;

if('0') {
    teste2 = true;
} else {
    teste2 = false;
}

console.log(teste2); // retorna true

let teste3;

if(undefined) {
    teste3 = true;
} else {
    teste3 = false;
}

console.log(teste3); // retorna false

let teste4;

if(null) {
    teste4 = true;
} else {
    teste4 = false;
}

console.log(teste4); // retorna false

let teste5;

if({}) {
    teste5 = true;
} else {
    teste5 = false;
}

console.log(teste5); // retorna true

let teste6;

if([]) {
    teste6 = true;
} else {
    teste6 = false;
}

console.log(teste6); // retorna true

let teste7;

if(NaN) {
    teste7 = true;
} else {
    teste7 = false;
}

console.log(teste7); // retorna false

// ==> Exemplos de Truthy: Todos os outros valores que não sejam Falsy serão Truthy
// ==> Descobrir através de representação booleana: !!


