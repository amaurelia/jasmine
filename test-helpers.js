/**
 * TEST HELPERS - Utilidades para las pruebas unitarias
 * 
 * Este archivo contiene funciones auxiliares y configuraciones
 * para facilitar el testing con Jasmine de manera más clara y mantenible.
 */

// ========================================
// FUNCIONES AUXILIARES DE COMPARACIÓN
// ========================================

/**
 * Compara dos objetos profundamente
 * @param {*} obj1 - Primer objeto a comparar
 * @param {*} obj2 - Segundo objeto a comparar
 * @returns {boolean} true si son iguales, false en caso contrario
 */
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1 == null || obj2 == null) return false;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}

/**
 * Ejecuta una función y mide su tiempo de ejecución
 * @param {Function} fn - Función a ejecutar
 * @returns {Object} Objeto con resultado y tiempo en ms
 */
function measurePerformance(fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    return {
        result: result,
        time: end - start,
        unit: 'ms'
    };
}

/**
 * Crea un mock básico de un objeto
 * @param {Object} methods - Métodos a simular
 * @returns {Object} Mock del objeto
 */
function createMock(methods = {}) {
    const mock = {};
    for (let [key, value] of Object.entries(methods)) {
        mock[key] = jasmine.createSpy(key).and.returnValue(value);
    }
    return mock;
}

// ========================================
// CONFIGURACIÓN DE PRUEBAS
// ========================================

/**
 * Configuración global para pruebas
 */
const testConfig = {
    timeout: 5000,
    retryAttempts: 2,
    verboseLogging: true
};

/**
 * Ejecuta una prueba con reintento automático
 * @param {string} description - Descripción de la prueba
 * @param {Function} testFn - Función de prueba
 * @param {number} attempts - Número de intentos
 */
function itWithRetry(description, testFn, attempts = testConfig.retryAttempts) {
    it(description, function() {
        let lastError;
        
        for (let i = 0; i < attempts; i++) {
            try {
                testFn();
                return;
            } catch (error) {
                lastError = error;
                if (i < attempts - 1) {
                    jasmine.clock().tick(100);
                }
            }
        }
        
        throw lastError;
    });
}

// ========================================
// MATCHERS PERSONALIZADOS
// ========================================

/**
 * Matchers adicionales para Jasmine
 */
beforeEach(function() {
    jasmine.addMatchers({
        toBeWithinRange: function() {
            return {
                compare: function(actual, expected) {
                    const [min, max] = expected;
                    const pass = actual >= min && actual <= max;
                    
                    return {
                        pass: pass,
                        message: `Expected ${actual} to be within [${min}, ${max}]`
                    };
                }
            };
        },
        
        toBeEven: function() {
            return {
                compare: function(actual) {
                    const pass = actual % 2 === 0;
                    return {
                        pass: pass,
                        message: `Expected ${actual} to be even`
                    };
                }
            };
        },
        
        toBeOdd: function() {
            return {
                compare: function(actual) {
                    const pass = actual % 2 !== 0;
                    return {
                        pass: pass,
                        message: `Expected ${actual} to be odd`
                    };
                }
            };
        }
    });
});
