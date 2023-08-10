/*
Integrantes:
Luis Alexander Sanchez Castillo
1. Dado dos números ingresados por el usuario realizar las 4 operaciones básicas, suma, resta, multiplicación, división e imprimir las operaciones. Validar la división entre 0(cero).
*/
'use strict';

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

alert(`Suma: ${suma}`);
alert(`Resta: ${resta}`);
alert(`Multiplicacion: ${multiplicacion}`);
alert(`Division: ${division}`);
