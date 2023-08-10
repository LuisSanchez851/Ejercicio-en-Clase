/*
Integrantes:
Luis Alexander Sanchez Castillo
2. Calcular el sueldo a pagar de un trabajador dado que se debe ingresar la cantidad de horas trabajadas y el valor de la hora en pesos.
*/

'use strict';

let sueldo  = parseFloat(prompt("Por favor digite el valor de una hora trabajada"));
let horas = parseFloat(prompt("Ingrese cantidad de horas trabajadas"));

let resultado = sueldo * horas ;

alert("Su sueldo es:" +resultado);
