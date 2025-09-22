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

resultado("Michelle", "2002-08-02");