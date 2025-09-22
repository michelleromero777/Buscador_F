let miVariable = 0;
miVariable = "2";

// la constante ayuda a crear variables que no se cambian 
const datos = 100;
console.log(datos)

//aqui estamos guardando una constante en una funcion flecha 
const mostrarAlerta = () => {
    alert("Funcion moderna")
} // <-----------------------------------------------
                                                 // |
// estas dos son iguales pero es mejor la de arriba |
const mostrarConsola = function(){
    alert("consola")
}

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
const resultado = (nombre, fechaNacimiento) => {
    const calcularEdad = (fechaNacimiento) => {
        const nacimiento = new Date(fechaNacimiento);
        const hoy = new Date();

        const años = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        const dia = hoy. getDate() - nacimiento.getDate();

        let edad;
        if (mes < 0 || (mes === 0 && dia < 0 )) {
            edad = años - 1;
        } else {
            edad = años;
        }

        return edad;
    }

    const edad = calcularEdad(fechaNacimiento);
    console.log("Hola " + nombre + " tienes " + edad + " años");

    
}

resultado("Michelle", "2002-08-01");

console.log("Aqui termina la tarea");

//new Date -> crea un objeto (en este caso una fecha) y los siguientes metodos sirven para sacar partes de esa fecha
// getFullYear() -> da el año completo
// getMonth() -> empieza en 0 para enero y termina en 11 para diciembre 
// getDate() -> el dia del mes (1 al 31)


/* const hoy = new Date();
console.log(hoy.getMonth()); */

// Si yo no le paso ningun valor a mi funcion pasara automaticamente por defecto la que ya tiene asignada 
const saludar = (nombre = "anonimo", edad = "sin edad") => {
    console.log("hola ",nombre, edad);
}
// si esto estuviera vacio saldrian los datos que estan por defecto pero si hay datos dentro saldrian los que han sido ingresados (si no mandas nada te manda que esta vacio el parametro)
//la funcion no detecta a que funcion le mandas los datos, por ello se tiene que tener cuidado con el orden 
saludar("mich", 22);


// toUpperCase hace que sean mayusculas 
const saludar2 = (nombre = "anonimo") => "hola " + nombre.toUpperCase();
console.log(saludar2("mich"));


// esta forma se llama MAP
let arreglo = ["coca", "pepsi", "jarrito", "mirinda"];

// esto se llama desestructuración y estoy aterrizando en variables no sera necesario darles la variable y luego la posicion, es decir las m1... son las variablea que creo con las posiciones que tengo arriba
const [m1, m2, m3, m4, m5] = arreglo; 

//ambas funcionan igual pero es mas comodo el segundo
console.log(arreglo[2]);
console.log(m2);


// esta es la forma extensa
let arreglo2 = arreglo.map((marca, index) => {
    // en este caso la marca que se tome saldra en mayusculas pues eso es lo que hace toUpperCase
   // console.log("la marca es: " + marca.toUpperCase());
    // console.log(index + ") la marca es: " + marca.toUpperCase());

    //con este valor retornado saldran en mayusculas mientras que con el otro en minusculas
    return marca.toUpperCase();
});

// essto es igual que lo de arriba solo que de otra forma, la forma abreviada
let arreglo3 = arreglo.map(marca => marca.toUpperCase());

console.log(arreglo);
console.log(arreglo2);

// si hay llaves es un objeto si hay corchetes es un objeto
// esto es desestructuracion para el objeto
const objeto = {
    "nombre":"Mich",
    "semestre": 7,
    "carrera":"sistemas", 
    "horas":[1,2,,3,4]
};

let {semestre, carrera, nombre, horas, edad = 0 } = objeto;
let [h1, h2, h3, h4] = horas
console.log(edad);
// al mandar a llamr podemos sacar el valor que uno desee, no importa el odran en el que esten sino en el que se mandan a llamar 
// la parte de la desestructuracion aplica en objetos no en arreglos
console.log(nombre, semestre, carrera);

let datos_generales = [
    {
        "nombre":"diego", 
        "semestre":7,
        "carrera":"sistemas",
        "horas":[1,2,3,4] 
    },
    {
        "nombre":"ana", 
        "semestre":9,
        "carrera":"gestion",
        "horas":[1,2,3] 
    },
    {
        "nombre":"jose", 
        "semestre":1,
        "carrera":"industrial",
        "horas":[1,2] 
    }
];
/* datos_generales .map(({nombre,semestre,carrera,horas})=>{
  console.log("Nombre: ",nombre);
  console.log("Semestre: ",semestre);
  console.log("Carrera: ",carrera);
  console.log("Horas: ");
  horas.map(hora => console.log(hora) );
  });
 */
const mostrar_datos = () =>{
    datos_generales.map(({nombre,semestre,carrera,horas})=>{
        console.log(
            `Nombre: ${nombre}
            Semestre: ${semestre}
            Carrera: ${carrera}
            Horas: ${horas.map(hora => 'h:${hora} ')}
            `
    );
  })
}
  //hacer una interfaz parfa capturar los campos , nombre ,sementre y horas la vamos a añadir al areeglo de datos generales

  let btn1 = document.getElementById('btn_generar');
  btn1.addEventListener("click", () =>{
    const data = {}; //arreglo = conjunto de datos que acomoda de forma ordenada
    // un objeto nace a partir de una clase
    let arreglo = document.getElementById("horas").value;
    data['nombre'] = document.getElementById("nombre").value;
    data['semestre'] = document.getElementById("semestre").value;
    data['carrera'] = document.getElementById("carrera").value;
    data['horas'] = arreglo.split("","");
    datos_generales.push(data);
    mostrar_datos();

    //una constante con valor a un objeto puede cambiar su valo

  })


  // 05/09 -- Funcion multiple
  // al colocar los tres puntos antes de mi variable va recibiendo n cantidad de datos, los convierte automaticamente en un arreglo
  // si se usa esto y se manda un arreglo lo que se mandara es un arreglo dentro de otro arreglo
  // desempaquetar datos -- usar igual tres puntos antes de mandarlos a llamar y esto los desempaqueta, pues automaticamente sabe que es un arreglo 
  const funcion_multiple_arg = (...dato) => {
    let [dt1, dt2, dt3] = dato;
    console.log(dt1);
    console.log(dt2);
    console.log(dt3);
    dato.map(dt => console.log(dt));
  }

  funcion_multiple_arg(...["lo que sea", 5, 2, 8, "b"]);

  // tambien podemos desempaquetar arreglos multiples, transferir nuevos datos 
let ar1 = [1, 2, 3, 4];
let ar2 = [5, 6, 7, 8];
let ar3 = [];

console.log(ar1)
console.log(ar2)
ar3 = [...ar1, ...ar2];
console.log(ar3)


// desempaquetar saca los datos y los guarda en donde se indique, pasa argumentos
let arr = [1, 2, 3, 4];
console.log(arr);
let arr2 = [...arr];
console.log("arreglo originar", arr)
console.log("aareglo copia", arr2)
// se esta apuntando al mismo espacio de memoria
arr2.push(5)
console.log("arreglo originar", arr)
console.log("aareglo copia", arr2)

// Los tres puntos sirven para empaquetar o bien para desempaquetar
