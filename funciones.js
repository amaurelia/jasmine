/**
 * FUNCIONES DE EJEMPLO PARA DEMOSTRAR PRUEBAS UNITARIAS CON JASMINE
 * 
 * Este archivo contiene funciones simples que serán probadas
 * para enseñar conceptos de testing a estudiantes de desarrollo web.
 */

// ========================================
// CALCULADORA BÁSICA
// ========================================

/**
 * Suma dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La suma de a y b
 */
function sumar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
    }
    return a + b;
}

/**
 * Resta dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La resta de a menos b
 */
function restar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
    }
    return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} El producto de a por b
 */
function multiplicar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
    }
    return a * b;
}

/**
 * Divide dos números
 * @param {number} a - Dividendo
 * @param {number} b - Divisor
 * @returns {number} El cociente de a dividido por b
 */
function dividir(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
    }
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

// ========================================
// FUNCIONES UTILITARIAS
// ========================================

/**
 * Verifica si un número es par
 * @param {number} numero - El número a verificar
 * @returns {boolean} true si es par, false si es impar
 */
function esPar(numero) {
    if (typeof numero !== 'number') {
        throw new Error('El parámetro debe ser un número');
    }
    return numero % 2 === 0;
}

/**
 * Formatea un nombre (primera letra en mayúscula, resto en minúscula)
 * @param {string} nombre - El nombre a formatear
 * @returns {string} El nombre formateado
 */
function formatearNombre(nombre) {
    if (typeof nombre !== 'string') {
        throw new Error('El parámetro debe ser una cadena de texto');
    }
    if (nombre.trim() === '') {
        throw new Error('El nombre no puede estar vacío');
    }
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

/**
 * Valida si un email tiene formato correcto
 * @param {string} email - El email a validar
 * @returns {boolean} true si el formato es válido, false en caso contrario
 */
function validarEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Convierte grados Celsius a Fahrenheit
 * @param {number} celsius - Temperatura en Celsius
 * @returns {number} Temperatura en Fahrenheit
 */
function celsiusAFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        throw new Error('La temperatura debe ser un número');
    }
    return (celsius * 9/5) + 32;
}

// ========================================
// FUNCIONES PARA ARRAYS
// ========================================

/**
 * Calcula el promedio de un array de números
 * @param {number[]} numeros - Array de números
 * @returns {number} El promedio de los números
 */
function calcularPromedio(numeros) {
    if (!Array.isArray(numeros)) {
        throw new Error('El parámetro debe ser un array');
    }
    if (numeros.length === 0) {
        throw new Error('El array no puede estar vacío');
    }
    
    // Verificar que todos los elementos sean números
    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] !== 'number') {
            throw new Error('Todos los elementos del array deben ser números');
        }
    }
    
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}

/**
 * Encuentra el número máximo en un array
 * @param {number[]} numeros - Array de números
 * @returns {number} El número máximo
 */
function encontrarMaximo(numeros) {
    if (!Array.isArray(numeros)) {
        throw new Error('El parámetro debe ser un array');
    }
    if (numeros.length === 0) {
        throw new Error('El array no puede estar vacío');
    }
    
    return Math.max(...numeros);
}

/**
 * Filtra números pares de un array
 * @param {number[]} numeros - Array de números
 * @returns {number[]} Array con solo los números pares
 */
function filtrarPares(numeros) {
    if (!Array.isArray(numeros)) {
        throw new Error('El parámetro debe ser un array');
    }
    
    return numeros.filter(numero => {
        if (typeof numero !== 'number') {
            throw new Error('Todos los elementos del array deben ser números');
        }
        return numero % 2 === 0;
    });
}

// ========================================
// CLASE DE EJEMPLO
// ========================================

/**
 * Clase para representar una cuenta bancaria simple
 */
class CuentaBancaria {
    constructor(saldoInicial = 0) {
        if (typeof saldoInicial !== 'number' || saldoInicial < 0) {
            throw new Error('El saldo inicial debe ser un número no negativo');
        }
        this.saldo = saldoInicial;
        this.historial = [];
    }
    
    /**
     * Deposita dinero en la cuenta
     * @param {number} cantidad - Cantidad a depositar
     */
    depositar(cantidad) {
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error('La cantidad debe ser un número positivo');
        }
        this.saldo += cantidad;
        this.historial.push(`Depósito: +$${cantidad}`);
    }
    
    /**
     * Retira dinero de la cuenta
     * @param {number} cantidad - Cantidad a retirar
     */
    retirar(cantidad) {
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error('La cantidad debe ser un número positivo');
        }
        if (cantidad > this.saldo) {
            throw new Error('Saldo insuficiente');
        }
        this.saldo -= cantidad;
        this.historial.push(`Retiro: -$${cantidad}`);
    }
    
    /**
     * Obtiene el saldo actual
     * @returns {number} Saldo actual
     */
    obtenerSaldo() {
        return this.saldo;
    }
    
    /**
     * Obtiene el historial de transacciones
     * @returns {string[]} Array con el historial
     */
    obtenerHistorial() {
        return [...this.historial]; // Retorna una copia
    }
}