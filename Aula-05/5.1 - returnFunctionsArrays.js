// @ts-nocheck
/**
 * Aula: 5.1 - Retorno de funções com arrays e objetos
 * Author: Glaucia Lemos
 * Data: 24/01/2021
 */

function myFunction() {
    return [1,2,3,4];
};

console.log(myFunction()[0]);

function myFunction2() {
    return {
        prop1: 1,
        prop2: 'Glaucia',
        prop3: function() {
            return prop3
        },
    };
};

console.log(myFunction2().prop1);