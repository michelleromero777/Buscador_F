"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var miVariable = 0;
miVariable = "2";

// la constante ayuda a crear variables que no se cambian 
var datos = 100;
console.log(datos);

//aqui estamos guardando una constante en una funcion flecha 
var mostrarAlerta = function mostrarAlerta() {
  alert("Funcion moderna");
}; // <-----------------------------------------------
// |
// estas dos son iguales pero es mejor la de arriba |
var mostrarConsola = function mostrarConsola() {
  alert("consola");
};
mostrarAlerta();
mostrarConsola();

// esta funcion tiene solo una instruccion por eso omitimos llaves
/* const saludar = (nombre) => console.log("hola ",nombre); */

//si tambien se tiene un solo argumento enviado (en este caso nombre) se pueden ser quitadas los parentesis
/* const saludar = nombre => console.log("hola ",nombre); */

// en esta funcion tenemos dentro otra funcion 
/* const saludar = (nombre) => {
    const edad = (datoEdad) =>{
        return datoEdad;
    }
    console.log("hola ",nombre,edad(100));
}
saludar("mich"); */

// ACTIVIDAD: crear un programa que calcule la edad en base a la fecha de nacimiento

// Esta funcion funcionar usando unicamente el año de nacimiento 
/* const resultado = (nombre, nacimiento, actual) => {
    const calcularEdad = (nacimiento, actual) => {
        const edad = actual - nacimiento; 
        return edad; 
    };

    const edad = calcularEdad(nacimiento, actual);

    console.log("Hola " + nombre + " tienes: " + edad + " años");
};

resultado("Michelle", 2002, 2025); */

// Este funciona usando la fecha de cumpleaños 
console.log("Aqui empieza la tarea");
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
resultado("Michelle", "2002-08-01");
console.log("Aqui termina la tarea");

//new Date -> crea un objeto (en este caso una fecha) y los siguientes metodos sirven para sacar partes de esa fecha
// getFullYear() -> da el año completo
// getMonth() -> empieza en 0 para enero y termina en 11 para diciembre 
// getDate() -> el dia del mes (1 al 31)

/* const hoy = new Date();
console.log(hoy.getMonth()); */

// Si yo no le paso ningun valor a mi funcion pasara automaticamente por defecto la que ya tiene asignada 
var saludar = function saludar() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "anonimo";
  var edad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "sin edad";
  console.log("hola ", nombre, edad);
};
// si esto estuviera vacio saldrian los datos que estan por defecto pero si hay datos dentro saldrian los que han sido ingresados (si no mandas nada te manda que esta vacio el parametro)
//la funcion no detecta a que funcion le mandas los datos, por ello se tiene que tener cuidado con el orden 
saludar("mich", 22);

// toUpperCase hace que sean mayusculas 
var saludar2 = function saludar2() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "anonimo";
  return "hola " + nombre.toUpperCase();
};
console.log(saludar2("mich"));

// esta forma se llama MAP
var arreglo = ["coca", "pepsi", "jarrito", "mirinda"];

// esto se llama desestructuración y estoy aterrizando en variables no sera necesario darles la variable y luego la posicion, es decir las m1... son las variablea que creo con las posiciones que tengo arriba
var m1 = arreglo[0],
  m2 = arreglo[1],
  m3 = arreglo[2],
  m4 = arreglo[3],
  m5 = arreglo[4];

//ambas funcionan igual pero es mas comodo el segundo
console.log(arreglo[2]);
console.log(m2);

// esta es la forma extensa
var arreglo2 = arreglo.map(function (marca, index) {
  // en este caso la marca que se tome saldra en mayusculas pues eso es lo que hace toUpperCase
  // console.log("la marca es: " + marca.toUpperCase());
  // console.log(index + ") la marca es: " + marca.toUpperCase());

  //con este valor retornado saldran en mayusculas mientras que con el otro en minusculas
  return marca.toUpperCase();
});

// essto es igual que lo de arriba solo que de otra forma, la forma abreviada
var arreglo3 = arreglo.map(function (marca) {
  return marca.toUpperCase();
});
console.log(arreglo);
console.log(arreglo2);

// si hay llaves es un objeto si hay corchetes es un objeto
// esto es desestructuracion para el objeto
var objeto = {
  "nombre": "Mich",
  "semestre": 7,
  "carrera": "sistemas",
  "horas": [1, 2,, 3, 4]
};
var semestre = objeto.semestre,
  carrera = objeto.carrera,
  nombre = objeto.nombre,
  horas = objeto.horas,
  _objeto$edad = objeto.edad,
  edad = _objeto$edad === void 0 ? 0 : _objeto$edad;
var _horas = _slicedToArray(horas, 4),
  h1 = _horas[0],
  h2 = _horas[1],
  h3 = _horas[2],
  h4 = _horas[3];
console.log(edad);
// al mandar a llamr podemos sacar el valor que uno desee, no importa el odran en el que esten sino en el que se mandan a llamar 
// la parte de la desestructuracion aplica en objetos no en arreglos
console.log(nombre, semestre, carrera);
var datos_generales = [{
  "nombre": "diego",
  "semestre": 7,
  "carrera": "sistemas",
  "horas": [1, 2, 3, 4]
}, {
  "nombre": "ana",
  "semestre": 9,
  "carrera": "gestion",
  "horas": [1, 2, 3]
}, {
  "nombre": "jose",
  "semestre": 1,
  "carrera": "industrial",
  "horas": [1, 2]
}];
/* datos_generales .map(({nombre,semestre,carrera,horas})=>{
  console.log("Nombre: ",nombre);
  console.log("Semestre: ",semestre);
  console.log("Carrera: ",carrera);
  console.log("Horas: ");
  horas.map(hora => console.log(hora) );
  });
 */
var mostrar_datos = function mostrar_datos() {
  datos_generales.map(function (_ref) {
    var nombre = _ref.nombre,
      semestre = _ref.semestre,
      carrera = _ref.carrera,
      horas = _ref.horas;
    console.log("Nombre: ".concat(nombre, "\n            Semestre: ").concat(semestre, "\n            Carrera: ").concat(carrera, "\n            Horas: ").concat(horas.map(function (hora) {
      return 'h:${hora} ';
    }), "\n            "));
  });
};
//hacer una interfaz parfa capturar los campos , nombre ,sementre y horas la vamos a añadir al areeglo de datos generales

var btn1 = document.getElementById('btn_generar');
btn1.addEventListener("click", function () {
  var data = {}; //arreglo = conjunto de datos que acomoda de forma ordenada
  // un objeto nace a partir de una clase
  var arreglo = document.getElementById("horas").value;
  data['nombre'] = document.getElementById("nombre").value;
  data['semestre'] = document.getElementById("semestre").value;
  data['carrera'] = document.getElementById("carrera").value;
  data['horas'] = arreglo.split("", "");
  datos_generales.push(data);
  mostrar_datos();

  //una constante con valor a un objeto puede cambiar su valo
});

// 05/09 -- Funcion multiple
// al colocar los tres puntos antes de mi variable va recibiendo n cantidad de datos, los convierte automaticamente en un arreglo
// si se usa esto y se manda un arreglo lo que se mandara es un arreglo dentro de otro arreglo
// desempaquetar datos -- usar igual tres puntos antes de mandarlos a llamar y esto los desempaqueta, pues automaticamente sabe que es un arreglo 
var funcion_multiple_arg = function funcion_multiple_arg() {
  for (var _len = arguments.length, dato = new Array(_len), _key = 0; _key < _len; _key++) {
    dato[_key] = arguments[_key];
  }
  var dt1 = dato[0],
    dt2 = dato[1],
    dt3 = dato[2];
  console.log(dt1);
  console.log(dt2);
  console.log(dt3);
  dato.map(function (dt) {
    return console.log(dt);
  });
};
funcion_multiple_arg.apply(void 0, ["lo que sea", 5, 2, 8, "b"]);

// tambien podemos desempaquetar arreglos multiples, transferir nuevos datos 
var ar1 = [1, 2, 3, 4];
var ar2 = [5, 6, 7, 8];
var ar3 = [];
console.log(ar1);
console.log(ar2);
ar3 = [].concat(ar1, ar2);
console.log(ar3);

// desempaquetar saca los datos y los guarda en donde se indique, pasa argumentos
var arr = [1, 2, 3, 4];
console.log(arr);
var arr2 = [].concat(arr);
console.log("arreglo originar", arr);
console.log("aareglo copia", arr2);
// se esta apuntando al mismo espacio de memoria
arr2.push(5);
console.log("arreglo originar", arr);
console.log("aareglo copia", arr2);

// Los tres puntos sirven para empaquetar o bien para desempaquetar