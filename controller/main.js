"use strict";

// funcion flecha que calcula la edad
var calcularEdad = function calcularEdad(anioNacimiento, anioActual) {
  var edad = anioActual - anioNacimiento;
  return edad;
};

// funcion flecha que saluda
var saludar = function saludar(nombre, anioNacimiento, anioActual) {
  var edad = calcularEdad(anioNacimiento, anioActual);
  alert("Hola " + nombre + ", tienes " + edad + " años.");
};

// ejemplo de uso
saludar("Michi", 2000, 2025);