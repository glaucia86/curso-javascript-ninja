/**
 * Aula: 1.5 - Funções
 * Author: Glaucia Lemos
 * Data: 10/01/2016
 * 
 * Observação: (exemplos realizados no terminal via node)
 * 
 */

// 1) Exemplos sobre Funções

> function nome() {}
undefined
> nome()
undefined
> nome
[Function: nome]

//Exemplo prático de Função

> var x = 1
undefined
> function soma() {
... x = x + 1;
... }
undefined
> x
1
> soma()
undefined
> x
2
> soma()
undefined
> x
3
> soma
[Function: soma]
> x
3
> soma()
undefined
> x
4

// Outro exemplo de uso de Função (return):

> x
4
> function qualquer() {
... var glaucia = 'glaucia';
... }
undefined
> qualquer()
undefined
> function qualquer2() {
... var glaucia = 'glaucia';
... return glaucia;
... }
undefined
> qualquer2()
'glaucia'

> var y = 4;
undefined
> function cinco() {
... return 5;
... }
undefined
> cinco()
5
> y
4
> y + 5
9
> y + cinco()
9

// Exemplo de Funções com argumentos e parâmetros:

> function soma(x, y) {
... return x + y;
... }
undefined
> soma()
NaN
> soma(1,2)
3
