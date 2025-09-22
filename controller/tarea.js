"use strict";

var resultado = function resultado(nombre, fechaNacimiento) {
  var calcularEdad = function calcularEdad(fechaNacimiento) {
    var nacimiento = new Date(fechaNacimiento);
    var hoy = new Date();
    var años = hoy.getFullYear() - nacimiento.getFullYear();
    var mes = hoy.getMonth() - nacimiento.getMonth();
    var dia = hoy.getDate() - nacimiento.getDate();
    var edad;
    if (mes < 0 || mes === 0 && dia < 0) {
      edad = años - 1;
    } else {
      edad = años;
    }
    return edad;
  };
  var edad = calcularEdad(fechaNacimiento);
  console.log("Hola " + nombre + " tienes " + edad + " años");
};
resultado("Michelle", "2002-08-02");