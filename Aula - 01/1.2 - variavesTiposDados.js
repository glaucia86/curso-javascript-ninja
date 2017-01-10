/**
 * Aula: 1.2 - Variavíes e Tipos de Dados
 * Author: Glaucia Lemos
 * Data: 10/01/2016
 * 
 * Observação: (exemplos realizados no terminal via node)
 * 
 */

// 1) Exemplo de Declaração de Variável 

> var x
undefined
> x
undefined
> x = 0
0
> x
0
> x = 1
1

// 2) Exemplo de Outros Tipos de Valores na declaração das variáveis:

/* Exemplo de uma declaração - double */
> x = 1.2
1.2

// 3) Tipos de Dados Js:

/**
 * 3.1) Number
 * 3.2) String
 * 3.3) Boolean
 * 3.4) Null
 * 3.5) Undefined
 */

> x
1.2
> x = 'hello world'
'hello world'
> x = "hello world"
'hello world'
> x = true
true
> x = false
false
> x = null
null
> x = undefined
undefined

/**
 * 3.6) Object
 * 3.7) Array
 */

//Exemplo de Object - Pessoa
> x = {}
{}
> var pessoa = {}
undefined
> pessoa = {
... altura: 1.56,
... peso: 70}
{ altura: 1.56, peso: 70 }
> pessoa
{ altura: 1.56, peso: 70 }
> pessoa.altura
1.56
> pessoa.peso
70
> pessoa.altura = 1.57
1.57
> pessoa
{ altura: 1.57, peso: 70 }
> pessoa.peso = 65
65
> pessoa
{ altura: 1.57, peso: 65 }

// Exemplo de Array
> var numeros =[]
undefined
> numeros
[]
> numeros = [1,2,3,4,5,6]
[ 1, 2, 3, 4, 5, 6 ]
> numeros
[ 1, 2, 3, 4, 5, 6 ]
> numeros[0]
1
> numeros[3]
4
> pessoa
{ altura: 1.57, peso: 65 }
> pessoa['altura']
1.57
> pessoa.altura
1.57
> pessoa['altura']



