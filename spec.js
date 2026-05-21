/**
 * ESPECIFICACIONES DE PRUEBAS CON JASMINE
 * 
 * Este archivo contiene las pruebas unitarias para las funciones
 * definidas en funciones.js. Sirve como ejemplo educativo para
 * enseñar conceptos de testing a estudiantes.
 */

// ========================================
// PRUEBAS PARA LA CALCULADORA BÁSICA
// ========================================

describe('Calculadora Básica', function() {
    
    describe('función sumar()', function() {
        it('debe sumar dos números positivos correctamente', function() {
            expect(sumar(2, 3)).toBe(5);
            expect(sumar(10, 15)).toBe(25);
        });
        
        it('debe manejar números negativos', function() {
            expect(sumar(-2, 3)).toBe(1);
            expect(sumar(-5, -3)).toBe(-8);
        });
        
        it('debe manejar decimales', function() {
            expect(sumar(1.5, 2.3)).toBeCloseTo(3.8);
        });
        
        it('debe lanzar error con parámetros no numéricos', function() {
            expect(function() { sumar('a', 3); }).toThrowError('Los parámetros deben ser números');
            expect(function() { sumar(3, null); }).toThrowError('Los parámetros deben ser números');
        });
    });
    
    describe('función restar()', function() {
        it('debe restar dos números correctamente', function() {
            expect(restar(5, 3)).toBe(2);
            expect(restar(10, 15)).toBe(-5);
        });
        
        it('debe manejar números negativos', function() {
            expect(restar(-2, 3)).toBe(-5);
            expect(restar(5, -3)).toBe(8);
        });
    });
    
    describe('función multiplicar()', function() {
        it('debe multiplicar dos números positivos', function() {
            expect(multiplicar(3, 4)).toBe(12);
            expect(multiplicar(2.5, 4)).toBe(10);
        });
        
        it('debe manejar multiplicación por cero', function() {
            expect(multiplicar(5, 0)).toBe(0);
            expect(multiplicar(0, 10)).toBe(0);
        });
        
        it('debe manejar números negativos', function() {
            expect(multiplicar(-3, 4)).toBe(-12);
            expect(multiplicar(-3, -4)).toBe(12);
        });
    });
    
    describe('función dividir()', function() {
        it('debe dividir dos números correctamente', function() {
            expect(dividir(10, 2)).toBe(5);
            expect(dividir(15, 3)).toBe(5);
        });
        
        it('debe manejar decimales', function() {
            expect(dividir(10, 3)).toBeCloseTo(3.33, 2);
        });
        
        it('debe lanzar error al dividir por cero', function() {
            expect(function() { dividir(10, 0); }).toThrowError('No se puede dividir por cero');
        });
        
        it('debe lanzar error con parámetros no numéricos', function() {
            expect(function() { dividir('10', 2); }).toThrowError('Los parámetros deben ser números');
        });
    });
});

// ========================================
// PRUEBAS PARA FUNCIONES UTILITARIAS
// ========================================

describe('Funciones Utilitarias', function() {
    
    describe('función esPar()', function() {
        it('debe identificar números pares correctamente', function() {
            expect(esPar(2)).toBe(true);
            expect(esPar(4)).toBe(true);
            expect(esPar(0)).toBe(true);
            expect(esPar(-2)).toBe(true);
        });
        
        it('debe identificar números impares correctamente', function() {
            expect(esPar(1)).toBe(false);
            expect(esPar(3)).toBe(false);
            expect(esPar(-1)).toBe(false);
        });
        
        it('debe lanzar error con parámetros no numéricos', function() {
            expect(function() { esPar('2'); }).toThrowError('El parámetro debe ser un número');
        });
    });
    
    describe('función formatearNombre()', function() {
        it('debe formatear nombres en minúsculas', function() {
            expect(formatearNombre('juan')).toBe('Juan');
            expect(formatearNombre('maría')).toBe('María');
        });
        
        it('debe formatear nombres en mayúsculas', function() {
            expect(formatearNombre('PEDRO')).toBe('Pedro');
            expect(formatearNombre('ANA')).toBe('Ana');
        });
        
        it('debe formatear nombres con mayúsculas y minúsculas mezcladas', function() {
            expect(formatearNombre('jUaN')).toBe('Juan');
        });
        
        it('debe lanzar error con nombres vacíos', function() {
            expect(function() { formatearNombre(''); }).toThrowError('El nombre no puede estar vacío');
            expect(function() { formatearNombre('   '); }).toThrowError('El nombre no puede estar vacío');
        });
        
        it('debe lanzar error con parámetros no string', function() {
            expect(function() { formatearNombre(123); }).toThrowError('El parámetro debe ser una cadena de texto');
        });
    });
    
    describe('función validarEmail()', function() {
        it('debe validar emails correctos', function() {
            expect(validarEmail('test@example.com')).toBe(true);
            expect(validarEmail('usuario.nombre@dominio.co')).toBe(true);
            expect(validarEmail('user123@test-domain.org')).toBe(true);
        });
        
        it('debe rechazar emails incorrectos', function() {
            expect(validarEmail('email-sin-arroba.com')).toBe(false);
            expect(validarEmail('email@')).toBe(false);
            expect(validarEmail('@dominio.com')).toBe(false);
            expect(validarEmail('email@dominio')).toBe(false);
            expect(validarEmail('')).toBe(false);
        });
        
        it('debe manejar parámetros no string', function() {
            expect(validarEmail(123)).toBe(false);
            expect(validarEmail(null)).toBe(false);
            expect(validarEmail(undefined)).toBe(false);
        });
    });
    
    describe('función celsiusAFahrenheit()', function() {
        it('debe convertir temperaturas conocidas correctamente', function() {
            expect(celsiusAFahrenheit(0)).toBe(32);
            expect(celsiusAFahrenheit(100)).toBe(212);
            expect(celsiusAFahrenheit(-40)).toBe(-40);
        });
        
        it('debe manejar decimales', function() {
            expect(celsiusAFahrenheit(25)).toBeCloseTo(77);
            expect(celsiusAFahrenheit(37)).toBeCloseTo(98.6);
        });
        
        it('debe lanzar error con parámetros no numéricos', function() {
            expect(function() { celsiusAFahrenheit('25'); }).toThrowError('La temperatura debe ser un número');
        });
    });
});

// ========================================
// PRUEBAS PARA FUNCIONES DE ARRAYS
// ========================================

describe('Funciones para Arrays', function() {
    
    describe('función calcularPromedio()', function() {
        it('debe calcular el promedio correctamente', function() {
            expect(calcularPromedio([1, 2, 3, 4, 5])).toBe(3);
            expect(calcularPromedio([10, 20, 30])).toBe(20);
        });
        
        it('debe manejar arrays con un solo elemento', function() {
            expect(calcularPromedio([42])).toBe(42);
        });
        
        it('debe manejar decimales', function() {
            expect(calcularPromedio([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
        });
        
        it('debe lanzar error con array vacío', function() {
            expect(function() { calcularPromedio([]); }).toThrowError('El array no puede estar vacío');
        });
        
        it('debe lanzar error si no es array', function() {
            expect(function() { calcularPromedio('no es array'); }).toThrowError('El parámetro debe ser un array');
        });
        
        it('debe lanzar error con elementos no numéricos', function() {
            expect(function() { calcularPromedio([1, 'dos', 3]); }).toThrowError('Todos los elementos del array deben ser números');
        });
    });
    
    describe('función encontrarMaximo()', function() {
        it('debe encontrar el máximo en arrays positivos', function() {
            expect(encontrarMaximo([1, 5, 3, 9, 2])).toBe(9);
            expect(encontrarMaximo([10, 20, 15])).toBe(20);
        });
        
        it('debe manejar números negativos', function() {
            expect(encontrarMaximo([-5, -2, -10, -1])).toBe(-1);
        });
        
        it('debe manejar arrays con un elemento', function() {
            expect(encontrarMaximo([42])).toBe(42);
        });
        
        it('debe lanzar error con array vacío', function() {
            expect(function() { encontrarMaximo([]); }).toThrowError('El array no puede estar vacío');
        });
    });
    
    describe('función filtrarPares()', function() {
        it('debe filtrar números pares correctamente', function() {
            expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
            expect(filtrarPares([1, 3, 5])).toEqual([]);
            expect(filtrarPares([2, 4, 6])).toEqual([2, 4, 6]);
        });
        
        it('debe manejar arrays vacíos', function() {
            expect(filtrarPares([])).toEqual([]);
        });
        
        it('debe manejar números negativos', function() {
            expect(filtrarPares([-4, -3, -2, -1, 0, 1, 2])).toEqual([-4, -2, 0, 2]);
        });
        
        it('debe lanzar error con elementos no numéricos', function() {
            expect(function() { filtrarPares([1, 'dos', 3]); }).toThrowError('Todos los elementos del array deben ser números');
        });
    });
});

// ========================================
// PRUEBAS PARA LA CLASE CUENTA BANCARIA
// ========================================

describe('Clase CuentaBancaria', function() {
    let cuenta;
    
    beforeEach(function() {
        cuenta = new CuentaBancaria(100); // Cuenta con $100 inicial
    });
    
    describe('constructor', function() {
        it('debe crear cuenta con saldo inicial correcto', function() {
            const nuevaCuenta = new CuentaBancaria(500);
            expect(nuevaCuenta.obtenerSaldo()).toBe(500);
        });
        
        it('debe crear cuenta con saldo cero por defecto', function() {
            const nuevaCuenta = new CuentaBancaria();
            expect(nuevaCuenta.obtenerSaldo()).toBe(0);
        });
        
        it('debe lanzar error con saldo inicial negativo', function() {
            expect(function() { new CuentaBancaria(-100); }).toThrowError('El saldo inicial debe ser un número no negativo');
        });
    });
    
    describe('método depositar()', function() {
        it('debe aumentar el saldo correctamente', function() {
            cuenta.depositar(50);
            expect(cuenta.obtenerSaldo()).toBe(150);
        });
        
        it('debe registrar el depósito en el historial', function() {
            cuenta.depositar(25);
            const historial = cuenta.obtenerHistorial();
            expect(historial).toContain('Depósito: +$25');
        });
        
        it('debe lanzar error con cantidades no positivas', function() {
            expect(function() { cuenta.depositar(-50); }).toThrowError('La cantidad debe ser un número positivo');
            expect(function() { cuenta.depositar(0); }).toThrowError('La cantidad debe ser un número positivo');
        });
    });
    
    describe('método retirar()', function() {
        it('debe disminuir el saldo correctamente', function() {
            cuenta.retirar(30);
            expect(cuenta.obtenerSaldo()).toBe(70);
        });
        
        it('debe registrar el retiro en el historial', function() {
            cuenta.retirar(25);
            const historial = cuenta.obtenerHistorial();
            expect(historial).toContain('Retiro: -$25');
        });
        
        it('debe lanzar error con saldo insuficiente', function() {
            expect(function() { cuenta.retirar(150); }).toThrowError('Saldo insuficiente');
        });
        
        it('debe lanzar error con cantidades no positivas', function() {
            expect(function() { cuenta.retirar(-50); }).toThrowError('La cantidad debe ser un número positivo');
        });
    });
    
    describe('método obtenerHistorial()', function() {
        it('debe devolver copia del historial', function() {
            cuenta.depositar(50);
            cuenta.retirar(25);
            const historial = cuenta.obtenerHistorial();
            
            // Modificar la copia no debe afectar el original
            historial.push('Operación falsa');
            expect(cuenta.obtenerHistorial().length).toBe(2);
        });
    });
});

// ========================================
// SUITE DE PRUEBAS PARA DEMOSTRAR DIFERENTES MATCHERS
// ========================================

describe('Demostración de Matchers de Jasmine', function() {
    
    it('debe demostrar matchers básicos', function() {
        // Igualdad
        expect(2 + 2).toBe(4);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        
        // Veracidad
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        
        // Comparaciones numéricas
        expect(10).toBeGreaterThan(5);
        expect(3).toBeLessThan(10);
        expect(Math.PI).toBeCloseTo(3.14, 2);
        
        // Strings
        expect('Hola Mundo').toContain('Mundo');
        expect('test@example.com').toMatch(/.*@.*\.com/);
        
        // Arrays
        expect(['a', 'b', 'c']).toContain('b');
        
        // Undefined y null
        expect(undefined).toBeUndefined();
        expect(null).toBeNull();
        expect('algo').toBeDefined();
    });
    
    it('debe demostrar manejo de excepciones', function() {
        expect(function() {
            throw new Error('Error de prueba');
        }).toThrow();
        
        expect(function() {
            throw new Error('Mensaje específico');
        }).toThrowError('Mensaje específico');
    });
});

// ========================================
// PRUEBAS ASÍNCRONAS (EJEMPLO SIMPLE)
// ========================================

describe('Pruebas Asíncronas (Ejemplo)', function() {
    
    it('debe manejar promesas', function(done) {
        // Simulamos una operación asíncrona simple
        setTimeout(function() {
            expect(true).toBe(true);
            done();
        }, 100);
    });
    
    it('debe usar spies para simular funciones', function() {
        const objeto = {
            metodo: function() {
                return 'valor original';
            }
        };
        
        spyOn(objeto, 'metodo').and.returnValue('valor simulado');
        
        expect(objeto.metodo()).toBe('valor simulado');
        expect(objeto.metodo).toHaveBeenCalled();
    });
});

// ========================================
// PRUEBAS PARA FUNCIONES AVANZADAS
// ========================================

describe('Funciones Avanzadas de Matemáticas', function() {
    
    describe('función esPrimo()', function() {
        it('debe identificar números primos correctamente', function() {
            expect(esPrimo(2)).toBe(true);
            expect(esPrimo(3)).toBe(true);
            expect(esPrimo(5)).toBe(true);
            expect(esPrimo(7)).toBe(true);
            expect(esPrimo(11)).toBe(true);
        });
        
        it('debe identificar números no primos', function() {
            expect(esPrimo(0)).toBe(false);
            expect(esPrimo(1)).toBe(false);
            expect(esPrimo(4)).toBe(false);
            expect(esPrimo(6)).toBe(false);
            expect(esPrimo(9)).toBe(false);
        });
    });
    
    describe('función mcd() - Máximo Común Divisor', function() {
        it('debe calcular el MCD de dos números positivos', function() {
            expect(mcd(12, 8)).toBe(4);
            expect(mcd(15, 10)).toBe(5);
            expect(mcd(21, 14)).toBe(7);
        });
        
        it('debe manejar números negativos', function() {
            expect(mcd(-12, 8)).toBe(4);
            expect(mcd(12, -8)).toBe(4);
        });
    });
    
    describe('función mcm() - Mínimo Común Múltiplo', function() {
        it('debe calcular el MCM de dos números', function() {
            expect(mcm(4, 6)).toBe(12);
            expect(mcm(3, 5)).toBe(15);
            expect(mcm(12, 18)).toBe(36);
        });
        
        it('debe manejar números negativos', function() {
            expect(mcm(-4, 6)).toBe(12);
            expect(mcm(4, -6)).toBe(12);
        });
    });
});