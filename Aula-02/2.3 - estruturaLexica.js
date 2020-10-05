/**
 * Aula: 2.3 - Estrutura Léxica
 * Author: Glaucia Lemos
 * Data: 24/07/2017
 * 
 * Observação: (exemplos realizados no terminal via node)
 * 
 */

// 1) Exemplo Estrutura Léxica: Case Sensitive:

> var animal = 'cachorro';
undefined
> var Animal = 'macaco';
undefined
> animal
'cachorro'
> Animal
'macaco'
> animal !== Animal
true

// 2) Exemplo Estrutura Léxica: Comentários 

// -> De linha
// /**/ -> De bloco

> //a variável animal é igual a cachorro
undefined
> var animal = 'cachorro'
undefined
> animal
'cachorro'
> /* uma linha*/
undefined

// 3) Exemplo Estrutura Léxica: Literais

> 12
12
> 'cachorro'
'cachorro'
> true
true
> false
false
> 1.2
1.2
> {a: 1}
{ a: 1 }
> [1,2]
[ 1, 2 ]

// 4) Exemplo Estrutura Léxica: Identificadores

// Podem iniciar com _ (underscore) ou $ (cifrão)
// letras de a a z
// letras de A a Z
// números de 0 à 9
// Podem conter qq caractere Unicode (não deve ser usados)

// 5) Exemplo Estrutura Léxica: Palavras reservadas

/**
 * break
 * case
 * class
 * catch
 * continue
 * debugger
 * delete
 * do
 * while
 * if
 * void
 * new 
 * let
 * else
 * try
 * extends...
 * 
 */

 






