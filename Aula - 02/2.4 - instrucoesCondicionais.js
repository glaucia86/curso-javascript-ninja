/**
 * Aula: 2.4 - Instruções Condicionais
 * Author: Glaucia Lemos
 * Data: 24/07/2017
 * 
 * Observação: (exemplos realizados no terminal via node)
 * 
 */

// 1) Exemplo Instruções Condicionais: if

> var x = 3
undefined
> x
3
> var y = 7
undefined
> y
7
> if(x === 3)
... y = 3;
3
> y
3
> x
3
> y
3
> if(x === y && x === 3)
... x = 5;
5
> y = 2
2
> x
5
> y
2
> if (x === 5 || y === 1) {
... x = 1;
... y = 1;
... }
1
> x
1
> y
1
> x
1
> if (x === 2) {
... x = 5;
... y = 5;
... }
undefined
> x
1
>

// 2) Exemplo Instruções Condicionais: else

> if (x ===2) {
... y = 2;
... } else {
... y = 10;
... }
10
> x
1
> y
10

// 3) Exemplo Instruções Condicionais: else if

> var x = 1
undefined
> var y = 10
undefined
> if (x === 2) {
... y = 2;
... } else if (y === 3) {
... x = 3;
... } else if(x === y) {
... x = 10;
... y = 100;
... } else {
... x = 0;
... y = 0;
... }
0
> x
0
> y
0

