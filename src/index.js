import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/* IMPORTACION DE BOOTSTRAP 
    1. Ejecutamos npm i bootstrap @popperjs/core
    2. npm i style-loader
    3. npm i sass-loader sass

    o todo junto seria:
    npm i css-loader style-loader sass-loader sass
*/


// Asi se hace una importacion y si sale en color opaco es porque no ha sido utilizada aun 
import Main from "./Main.js";
import { montrar_alerta } from "./Main.js";
import { mostrar_alerta, mostrar_consola } from "./Metodos.js";
// recordar que extends es para hacer herencia 
class Persona extends Main {
    #nombre;
    #apellido;
    #edad;
    #sexo;
    
    constructor(nombre, apellido, edad, sexo) {
        super(); 
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
        this.#sexo = sexo;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    setApellido(apellido) {
        this.#apellido = apellido;
    }
    setEdad(edad) {
        this.#edad = edad;
    }
    setSexo(sexo) {
        this.#sexo = sexo;
    }


    getNombre() {
        return this.#nombre;
    }
    getApellido() {
        return this.#apellido;
    }
    getEdad() {
        return this.#edad;
    }
    getSexo() {
        return this.#sexo;
    }

    mostrar() {
        console.log(`
            Nombre: ${this.#nombre},
            Apellido: ${this.#apellido},
            Edad: ${this.#edad},
            Sexo: ${this.#sexo}
        `);
        this.#saludar();
    }

    #saludar() {
        console.log("Hola, ¿Qué hace?");
    }
}


let persona1 = new Persona("Michelle", "Romero", 22, "F");
persona1.mostrar();
persona1.setNombre("Test");
persona1.mostrar(); 
persona1.setEdad("23")

persona1.mostrar_info();
mostrar_alerta();
mostrar_consola();


let validacion=true;
let valor=validacion ? "hola" : "adios";
console.log(valor);


let pj1 = 1000;
let pj2 = 1000;

const ataque_pj1 = () => {
    pj1 = 100;
    console.log("Vida personaje 1: ${pj1}");
}

const ataque_pj2 = () => {
    pj2 = 100;
    console.log("Vida personaje 2: ${pj2}");
}

ataque_pj1();
ataque_pj2();


const jugar = (eleccionJugador) => {
    const opciones = ["piedra", "papel", "tijera"];
    if (!opciones.includes(eleccionJugador)) {
        console.log("Opción inválida. Usa 'piedra', 'papel' o 'tijera'");
        return;
    }


    if (eleccionJugador === eleccionCons) {
        console.log("Empate!");
    } else if (
        (eleccionJugador === "piedra" && eleccionCons === "tijera") ||
        (eleccionJugador === "papel" && eleccionCons === "piedra") ||
        (eleccionJugador === "tijera" && eleccionCons === "papel")
    ) {
        console.log("Ganaste!");
    } else {
        console.log("Perdiste!");
    }
}

console.log("Usa jugar('piedra'|'papel'|'tijera') en la consola para jugar.");


/* let objeto = new Main();
objeto.mostrar_info(); */

/* Persona.mostrar() */