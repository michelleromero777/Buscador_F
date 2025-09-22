// solo se puede hacer una exportacion por funcion 

export const mostrar_alerta = () => { // esta es una manera de exportar 
    alert("Mensaje desde alerta");
}

const mostrar_consola = () => {
    console.log("Mensaje desde consola");
}

export {mostrar_consola}; // esta es otra manera de exportar 