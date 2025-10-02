module.exports = {
  // Directorio donde buscar archivos de prueba
  spec_dir: ".",
  
  // Patrones de archivos de especificación
  spec_files: [
    "spec.js"
  ],
  
  // Archivos helper que se cargan antes de las specs
  helpers: [
    "funciones.js"
  ],
  
  // Configuración de timeouts
  defaultTimeoutInterval: 5000,
  
  // Detener en la primera falla
  stopSpecOnExpectationFailure: false,
  
  // Ejecutar specs en orden aleatorio
  random: false,
  
  // Reportero personalizado (opcional)
  // reporters: [
  //   {
  //     name: 'jasmine-console-reporter',
  //     options: {
  //       colors: 1,
  //       cleanStack: 1,
  //       verbosity: 4,
  //       listStyle: 'indent',
  //       activity: false
  //     }
  //   }
  // ]
};