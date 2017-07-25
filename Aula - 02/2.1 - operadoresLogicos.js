/**
 * Aula: 2.1 - Operadores Lógicos
 * Author: Glaucia Lemos
 * Data: 10/01/2016
 * 
 * Observação: (exemplos realizados no terminal via node)
 * 
 */

 
// 1) Exemplo de Operador Lógico: And &&

> var x = 3;
undefined
> var y = 7;
undefined
> x === 3;
true
> y === 5
false
> y === '7'
false
> y === 7
true
> x === 3 && y ===7
true
> x === 3 && y === 4
false

// 2) Exemplo de Operador Lógico: Or ||

> x
3
> y
7
> x === 3 || y === 3
true


// 3) Exemplo de Operador Lógico: NOT !

> x === 3
true
> ! x === 3
false
> x !=== 3
...
> x !== 3
false
> x != 3
false
> x === '3'
false
> x != '3'
false
> x !== '3'
true
