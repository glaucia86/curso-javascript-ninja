/**
 * Aula: 1.4 - Operadores de Igualdade e Relacionais
 * Author: Glaucia Lemos
 * Data: 10/01/2016
 * 
 * Observação: (exemplos realizados no terminal via node)
 * 
 */

// 1) Exemplos de Operadores Igualdade

/**
 * 1.1) == Igual a
 * 1.2) != Diferente de
 * 
 */

> var x = 0
undefined
> x
0
> 1 == 1
true
> 1 == 2
false
> 1 != 2
true
> 2 != 2
false
> x == 0
true
> x
0

/**
 * 1.3) === Igual a, e do mesmo tipo
 * 1.4) !== Diferente, mas do mesmo tipo
 */

> 'glaucia' == 'glaucia'
true
> var nome = 'glaucia'
undefined
> nome
'glaucia'
> nome == 'glaucia'
true
> var pessoa = 'jake'
undefined
> pessoa
'jake'
> nome == pessoa
false
> pessoa
'jake'
> nome
'glaucia'
> var um = '1'
undefined
> um
'1'
> var numum = 1
undefined
> numum
1
> um == numum
true
> um === numum
false
> um !== numum
true

// 2) Exemplos de Operadores Relacionais:

/**
 * 2.1) > Maior que
 * 2.2) < Maior que
 * 2.3) >= Maior igual que
 * 2.4) <= Menor igual que
 * 
 */

> 1 > 2
false
> 2 < 3
true
> 10 < 100
true
> 1000 > 2
true
> 1000 > 1000
false
> 1000 >= 1000
true
> 40 < 40
false
> 40 <= 40
true
