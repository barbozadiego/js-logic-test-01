## Test Lógica JavaScript - 01 

Desarrolle un programa en JavaScript que permita al usuario ejecutar las siguientes acciones. Comenzando con el ingreso de un número entre 0 y 99 escrito con **dos** dígitos, realice lo siguiente:

 
* Sume los dos dígitos de la cifra.
* Tome el dígito de la derecha, tanto del número inicial como del resultado de la suma.
* Finalmente combine estos números.

Al repetir este proceso varias veces se obtiene el número original.

#### Por ejemplo:


| Inicio        | Sumar Dígitos | Combinar Dígitos | Pasos         |
| ------------- | ------------- | ---------------- |:-------------:|
| 26            | 2 + 6 = 08    | 6 y 8 = 68       | 1             |
| 68            | 6 + 8 = 14    | 8 y 4 = 84       | 2             |
| 84            | 8 + 4 = 12    | 4 y 2 = 42       | 3             |
| 42            | 4 + 2 = 06    | 2 y 6 = 26       | 4             |


En este caso, tomó **4** pasos obtener el **26**.

Dado un número entero, indique la cantidad de pasos requeridos para obtener el número original.


| Entrada de ejemplo  | Salida de ejemplo (pasos)  |
| ------------------- |:--------------------------:|
| 26                  | 4                          |
| 55                  | 3                          |
| 00                  | 1                          |

El programa debe emitir en la página del navegador la seguidilla de las sumas, la combinación de los dígitos y la cantidad de pasos de la misma.