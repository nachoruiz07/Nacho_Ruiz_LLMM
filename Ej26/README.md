# Ejercicio 26: Instalación de Gulp

Este ejercicio consiste en configurar un entorno de desarrollo básico con Gulp.

## Pasos

1. Abre una terminal en esta carpeta.
2. Inicializa el proyecto (si no existiera `package.json`):
   ```bash
   npm init -y
   ```
3. Instala Gulp globalmente (si no lo tienes):
   ```bash
   npm install --global gulp-cli
   ```
4. Instala Gulp y Gulp-Sass en el proyecto como dependencias de desarrollo:
   ```bash
   npm install --save-dev gulp gulp-sass sass
   ```
5. Crea un archivo `gulpfile.js` vacío para probar que corre:
   ```javascript
   function defaultTask(cb) {
     console.log('¡Gulp está funcionando!');
     cb();
   }
   exports.default = defaultTask;
   ```
6. Ejecuta `gulp` en la terminal.

## Archivos incluidos
Se incluye un `package.json` básico para que solo tengas que ejecutar `npm install`.
