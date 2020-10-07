// @ts-nocheck
/**
 * Aula: 3.3 - Métodos de Objeto - Parte 2
 * Author: Glaucia Lemos
 * Data: 05/10/2020
 */

const pessoa = {
    nome: 'Glaucia',
    idade: 34,
    peso: 77,
    altura: 1.56,
    sexo: 'feminino'
};

pessoa.cor = 'mulata';
pessoa.sobrenome = 'Lemos';

// Método:
pessoa.andar = function() {
    return 'pessoa andando'
};

// Método
pessoa.aniversario = function() {
    pessoa.idade++;
};

// Método:
pessoa.nomeCompleto = function() {
    return pessoa.nome + ' ' + pessoa.sobrenome;
};

console.log(pessoa);
console.log(pessoa.andar());
console.log(pessoa.nomeCompleto());
pessoa.aniversario();