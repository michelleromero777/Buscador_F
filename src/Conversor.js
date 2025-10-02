// src/Conversor.js
class Conversor {
    constructor() {
        // Constructor vacío, métodos estáticos
    }

    static precedencia(op) {
        if (op === '+' || op === '-') return 1;
        if (op === '*' || op === '/') return 2;
        if (op === '^') return 3;
        return 0;
    }

    static tokenizar(expresion) {
        let tokens = [];
        let numeroActual = '';
        
        for (let i = 0; i < expresion.length; i++) {
            let c = expresion[i];
            
            if (c === ' ') {
                if (numeroActual) {
                    tokens.push(numeroActual);
                    numeroActual = '';
                }
                continue;
            }
            
            if (!isNaN(c) || c === '.') {
                numeroActual += c;
            } else if (['+', '-', '*', '/', '^', '(', ')'].includes(c)) {
                if (numeroActual) {
                    tokens.push(numeroActual);
                    numeroActual = '';
                }
                tokens.push(c);
            }
        }
        
        if (numeroActual) {
            tokens.push(numeroActual);
        }
        
        return tokens;
    }

    static infija_a_postfija(expresion) {
        let tokens = this.tokenizar(expresion);
        let pila = [];
        let salida = [];
        
        for (let token of tokens) {
            if (!isNaN(token)) {
                salida.push(token);
            } else if (token === '(') {
                pila.push(token);
            } else if (token === ')') {
                while (pila.length > 0 && pila[pila.length - 1] !== '(') {
                    salida.push(pila.pop());
                }
                pila.pop();
            } else if (['+', '-', '*', '/', '^'].includes(token)) {
                while (pila.length > 0 && 
                       pila[pila.length - 1] !== '(' && 
                       this.precedencia(pila[pila.length - 1]) >= this.precedencia(token)) {
                    salida.push(pila.pop());
                }
                pila.push(token);
            }
        }
        
        while (pila.length > 0) {
            salida.push(pila.pop());
        }
        
        return salida.join(' ');
    }

    static infija_a_prefija(expresion) {
        let tokens = this.tokenizar(expresion);
        let pila = [];
        let salida = [];
        
        // Procesar tokens de derecha a izquierda
        for (let i = tokens.length - 1; i >= 0; i--) {
            let token = tokens[i];
            
            if (!isNaN(token)) {
                // Si es un número, agregar a la salida
                salida.push(token);
            } else if (token === ')') {
                // Paréntesis derecho va a la pila
                pila.push(token);
            } else if (token === '(') {
                // Paréntesis izquierdo: vaciar hasta encontrar ')'
                while (pila.length > 0 && pila[pila.length - 1] !== ')') {
                    salida.push(pila.pop());
                }
                pila.pop(); // Remover el ')'
            } else if (['+', '-', '*', '/', '^'].includes(token)) {
                // Operador: comparar precedencias
                while (pila.length > 0 && 
                       pila[pila.length - 1] !== ')' && 
                       this.precedencia(pila[pila.length - 1]) > this.precedencia(token)) {
                    salida.push(pila.pop());
                }
                pila.push(token);
            }
        }
        
        // Vaciar la pila
        while (pila.length > 0) {
            salida.push(pila.pop());
        }
        
        // Invertir el resultado para obtener la notación prefija
        salida.reverse();
        
        // Separar operadores y números manteniendo el orden
        let operadores = [];
        let numeros = [];
        
        for (let token of salida) {
            if (['+', '-', '*', '/', '^'].includes(token)) {
                operadores.push(token);
            } else {
                numeros.push(token);
            }
        }
        
        // Retornar: primero operadores (en orden), luego números (en orden)
        return operadores.join(' ') + ' ' + numeros.join(' ');
    }

    static evaluarPostfija(expresion) {
        let tokens = expresion.split(' ');
        let pila = [];
        
        for (let token of tokens) {
            if (!isNaN(token)) {
                pila.push(parseFloat(token));
            } else if (['+', '-', '*', '/', '^'].includes(token)) {
                let b = pila.pop();
                let a = pila.pop();
                
                switch(token) {
                    case '+': pila.push(a + b); break;
                    case '-': pila.push(a - b); break;
                    case '*': pila.push(a * b); break;
                    case '/': pila.push(a / b); break;
                    case '^': pila.push(Math.pow(a, b)); break;
                }
            }
        }
        
        return pila[0];
    }

    static quitarParentesis(expresion) {
        return expresion.replace(/[()]/g, '');
    }

    static validarExpresion(expresion) {
        if (!expresion || expresion.trim() === '') {
            return { valida: false, mensaje: 'La expresión está vacía' };
        }

        let balance = 0;
        for (let c of expresion) {
            if (c === '(') balance++;
            if (c === ')') balance--;
            if (balance < 0) {
                return { valida: false, mensaje: 'Paréntesis mal balanceados' };
            }
        }
        if (balance !== 0) {
            return { valida: false, mensaje: 'Paréntesis mal balanceados' };
        }

        let caracteresValidos = /^[0-9+\-*/^()\s.]+$/;
        if (!caracteresValidos.test(expresion)) {
            return { valida: false, mensaje: 'La expresión contiene caracteres no válidos' };
        }

        if (/[+\-*\/^]{2,}/.test(expresion)) {
            return { valida: false, mensaje: 'Operadores consecutivos detectados' };
        }

        if (/^[+*\/^]/.test(expresion.trim())) {
            return { valida: false, mensaje: 'La expresión no puede empezar con ese operador' };
        }
        if (/[+\-*\/^]$/.test(expresion.trim())) {
            return { valida: false, mensaje: 'La expresión no puede terminar con un operador' };
        }

        if (!/\d/.test(expresion)) {
            return { valida: false, mensaje: 'La expresión debe contener al menos un número' };
        }

        return { valida: true };
    }

    static convertir(expresion) {
        const validacion = this.validarExpresion(expresion);
        if (!validacion.valida) {
            throw new Error(validacion.mensaje);
        }

        const tiempoInfija = performance.now();
        const expresionSinParentesis = this.quitarParentesis(expresion);
        const tiempoInfijaFinal = (performance.now() - tiempoInfija).toFixed(4);
        
        const tiempoPostfija = performance.now();
        const postfija = this.infija_a_postfija(expresion);
        const tiempoPostfijaFinal = (performance.now() - tiempoPostfija).toFixed(4);
        
        const tiempoPrefija = performance.now();
        const prefija = this.infija_a_prefija(expresion);
        const tiempoPrefijaFinal = (performance.now() - tiempoPrefija).toFixed(4);
        
        const resultado = this.evaluarPostfija(postfija);
        
        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error('Resultado inválido');
        }

        return {
            infija: expresionSinParentesis,
            postfija: postfija,
            prefija: prefija,
            resultado: resultado,
            tiempos: {
                infija: tiempoInfijaFinal,
                postfija: tiempoPostfijaFinal,
                prefija: tiempoPrefijaFinal
            }
        };
    }
}

export default Conversor;