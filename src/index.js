import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// src/conversor-index.js
import Conversor from './Conversor.js';

// Función para convertir y mostrar resultados
function convertir() {
    const expresion = document.getElementById('expresion').value;
    const resultadoDiv = document.getElementById('resultado');
    
    try {
        const resultado = Conversor.convertir(expresion);
        
        resultadoDiv.innerHTML = `
            <div class="resultado">
                <p><strong>Infija:</strong> ${resultado.infija} <span class="tiempo">(${resultado.tiempos.infija} ms)</span></p>
                <p><strong>Postfija:</strong> ${resultado.postfija} <span class="tiempo">(${resultado.tiempos.postfija} ms)</span></p>
                <p><strong>Prefija:</strong> ${resultado.prefija} <span class="tiempo">(${resultado.tiempos.prefija} ms)</span></p>
                <p class="resultado-operacion">Resultado: ${resultado.resultado}</p>
            </div>
        `;
    } catch (error) {
        resultadoDiv.innerHTML = `
            <div class="error">
                <strong>Error:</strong> ${error.message}
            </div>
        `;
    }
}

// Hacer la función disponible globalmente
window.convertir = convertir;

// Convertir automáticamente al cargar
document.addEventListener('DOMContentLoaded', function() {
    convertir();
    
    // Agregar evento para convertir al presionar Enter
    document.getElementById('expresion').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            convertir();
        }
    });
});