# 🧪 Jasmine Testing Lab - Laboratorio de Pruebas Unitarias

¡Bienvenidos al laboratorio de pruebas unitarias con Jasmine! Este proyecto está diseñado para enseñar conceptos fundamentales de testing en JavaScript de manera práctica y educativa.

## 📋 Tabla de Contenidos

- [¿Qué es Jasmine?](#qué-es-jasmine)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Cómo Ejecutar las Pruebas](#cómo-ejecutar-las-pruebas)
- [Conceptos Clave](#conceptos-clave)
- [Ejemplos Incluidos](#ejemplos-incluidos)
- [Cobertura de Código](#cobertura-de-código)
- [Ejercicios Propuestos](#ejercicios-propuestos)

## 🔬 ¿Qué es Jasmine?

Jasmine es un framework de pruebas unitarias para JavaScript que nos permite:

- ✅ Escribir pruebas legibles y mantenibles
- 🐛 Detectar errores antes de que lleguen a producción
- 📊 Verificar que nuestro código funciona como esperamos
- 🔄 Facilitar el refactoring con confianza

## 📁 Estructura del Proyecto

```
jasmine-testing-lab/
├── index.html          # Página principal con las pruebas
├── cobertura.html      # Guía de cobertura de código
├── styles.css          # Estilos personalizados
├── funciones.js        # Funciones a probar
├── spec.js             # Especificaciones de prueba
├── package.json        # Configuración del proyecto
├── jasmine.config.js   # Configuración de Jasmine
└── README.md           # Esta documentación
```

## 🚀 Instalación y Configuración

### Opción 1: Ejecución Directa (Recomendada para Principiantes)

1. **Clona o descarga el proyecto**
2. **Abre `index.html` en tu navegador**
   - Simplemente haz doble clic en el archivo
   - O arrastra el archivo a tu navegador

### Opción 2: Servidor Local (Recomendada para Desarrollo)

1. **Asegúrate de tener Node.js instalado**
   ```bash
   node --version
   npm --version
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor local**
   ```bash
   npm start
   ```
   
   O alternativamente:
   ```bash
   npm run serve
   ```

4. **Abre tu navegador en `http://localhost:8080`**

## 🏃‍♂️ Cómo Ejecutar las Pruebas

### En el Navegador
- Abre `index.html` y verás las pruebas ejecutándose automáticamente
- Los resultados aparecen en el panel derecho

### En la Terminal (Para Cobertura)
```bash
# Ejecutar solo las pruebas
npm test

# Ejecutar con cobertura
npm run coverage

# Generar reporte HTML de cobertura
npm run coverage-report
```

## 📊 Cobertura de Código

Este proyecto utiliza **NYC (Istanbul)** para generar reportes de cobertura de código. 

### Targets de Cobertura
- **Líneas:** 80%
- **Funciones:** 80%
- **Ramas:** 80%  
- **Declaraciones:** 80%

Verifica el reporte en `coverage/index.html` después de ejecutar `npm run coverage-report`.

## 🤝 Contribuyendo

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto y Soporte

- 📧 Email: soporte@jasminetesting.dev
- 🐛 Issues: [GitHub Issues](https://github.com/tu-repo/jasmine-testing-lab/issues)
- 💬 Discussions: Abierto para preguntas y sugerencias

## 📝 Changelog

### Versión 1.0.0 (2024)
- ✅ Versión inicial del laboratorio
- ✅ Ejemplos básicos de testing
- ✅ Guía educativa completa
- ✅ Configuración de cobertura

## 📚 Conceptos Clave

### 1. **Describe** - Agrupa pruebas relacionadas
```javascript
describe('Calculadora', function() {
    // Pruebas relacionadas con la calculadora
});
```

### 2. **It** - Define una prueba específica
```javascript
it('debe sumar dos números correctamente', function() {
    expect(sumar(2, 3)).toBe(5);
});
```

### 3. **Expect** - Realiza aserciones
```javascript
expect(resultado).toBe(valorEsperado);
expect(array).toContain(elemento);
expect(funcion).toThrow();
```

### 4. **Matchers Comunes**
- `toBe()` - Igualdad estricta (===)
- `toEqual()` - Igualdad de contenido
- `toContain()` - Contiene elemento
- `toThrow()` - Lanza excepción
- `toBeTruthy()` / `toBeFalsy()` - Veracidad
- `toBeCloseTo()` - Números decimales

## 🧮 Ejemplos Incluidos

### Funciones de Calculadora
- `sumar(a, b)` - Suma dos números
- `restar(a, b)` - Resta dos números
- `multiplicar(a, b)` - Multiplica dos números
- `dividir(a, b)` - Divide dos números

### Funciones Utilitarias
- `esPar(numero)` - Verifica si un número es par
- `formatearNombre(nombre)` - Formatea nombres
- `validarEmail(email)` - Valida formato de email
- `celsiusAFahrenheit(celsius)` - Convierte temperaturas

### Funciones para Arrays
- `calcularPromedio(numeros)` - Calcula promedio
- `encontrarMaximo(numeros)` - Encuentra el máximo
- `filtrarPares(numeros)` - Filtra números pares

### Clase de Ejemplo
- `CuentaBancaria` - Simula una cuenta bancaria simple
  - Depósitos y retiros
  - Validaciones de saldo
  - Historial de transacciones

## 📊 Cobertura de Código

La cobertura de código mide qué porcentaje de tu código está siendo probado.

### Métricas Importantes:
- **Lines**: Líneas de código ejecutadas
- **Functions**: Funciones llamadas durante las pruebas
- **Branches**: Ramas condicionales probadas
- **Statements**: Declaraciones ejecutadas

### Objetivos Recomendados:
- 🟢 **80-90%**: Excelente cobertura
- 🟡 **70-80%**: Buena cobertura
- 🟠 **60-70%**: Cobertura básica
- 🔴 **<60%**: Insuficiente

### Generar Reportes:
```bash
# Reporte en terminal
npm run coverage

# Reporte HTML detallado
npm run coverage-report
```

El reporte HTML se genera en la carpeta `coverage/lcov-report/index.html`

## 🎯 Ejercicios Propuestos

### Nivel Principiante
1. **Agrega una función `esMayor(a, b)`** que retorne si `a` es mayor que `b`
2. **Escribe pruebas para verificar** que la función maneja números negativos
3. **Crea una función `contarVocales(texto)`** y sus respectivas pruebas

### Nivel Intermedio
4. **Implementa una clase `Rectangulo`** con métodos para calcular área y perímetro
5. **Agrega validaciones** a las funciones existentes y prueba los casos de error
6. **Crea funciones asíncronas** y aprende a probarlas con `done()`

### Nivel Avanzado
7. **Implementa mocks y spies** para simular dependencias externas
8. **Practica TDD** (Test Driven Development): escribe las pruebas primero
9. **Optimiza la cobertura** hasta alcanzar al menos 90% en todas las métricas

## 🛠 Comandos Útiles

```bash
# Desarrollo
npm start              # Servidor local
npm test              # Solo pruebas
npm run coverage      # Pruebas + cobertura

# Análisis
npm run coverage-report   # Reporte HTML detallado
```

## 🎨 Personalización

### Agregar Nuevas Funciones
1. Define tu función en `funciones.js`
2. Escribe las pruebas en `spec.js`
3. Recarga la página para ver los resultados

### Modificar Estilos
- Edita `styles.css` para personalizar la apariencia
- Los estilos usan variables CSS para fácil personalización

### Configurar Jasmine
- Modifica `jasmine.config.js` para cambiar configuraciones
- Ajusta timeouts, reporteros, etc.

## 📖 Recursos Adicionales

### Documentación Oficial
- [Jasmine Documentation](https://jasmine.github.io/)
- [Jasmine GitHub](https://github.com/jasmine/jasmine)

### Tutoriales Recomendados
- [MDN - Testing JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

### Herramientas Relacionadas
- **Jest**: Framework alternativo con más funcionalidades
- **Mocha**: Framework flexible con muchas opciones
- **Cypress**: Para pruebas end-to-end

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores o tienes ideas para mejorar este laboratorio:

1. Reporta issues o bugs
2. Sugiere nuevos ejercicios
3. Mejora la documentación
4. Agrega ejemplos más complejos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo para fines educativos.

---

## 🎓 Para Estudiantes

### Consejos para Aprender Testing:

1. **Empieza Simple**: Comienza con funciones básicas antes de probar clases complejas
2. **Lee las Pruebas**: A menudo las pruebas son la mejor documentación
3. **Piensa en Casos Edge**: ¿Qué pasa con valores null, undefined, o negativos?
4. **Practica TDD**: Intenta escribir las pruebas antes que el código
5. **Busca Alta Cobertura**: Pero recuerda que 100% de cobertura no garantiza perfección

### Preguntas Frecuentes:

**P: ¿Por qué mis pruebas fallan?**
R: Revisa los mensajes de error, compara valores esperados vs actuales

**P: ¿Cómo pruebo funciones asíncronas?**
R: Usa el parámetro `done` o promesas con `async/await`

**P: ¿Qué es un "spy"?**
R: Una función simulada que te permite verificar si fue llamada y con qué parámetros

---

¡Feliz testing! 🚀✨