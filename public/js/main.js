// funcion flecha que calcula la edad
const calcularEdad = (anioNacimiento, anioActual) => {
    const edad = anioActual - anioNacimiento;
    return edad;
};

// funcion flecha que saluda
const saludar = (nombre, anioNacimiento, anioActual) => {
    const edad = calcularEdad(anioNacimiento, anioActual);
    alert("Hola " + nombre + ", tienes " + edad + " años.");
};

// ejemplo de uso
saludar("Michi", 2000, 2025);
