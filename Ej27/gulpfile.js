// Tarea: Configura tu gulpfile.js
// 1. Importa gulp y gulp-sass
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// 2. Define una tarea 'css' para compilar
function compilarCSS() {
    return src('src/scss/style.scss')      // Origen del archivo SASS
        .pipe(sass())                       // Compilar SASS a CSS
        .pipe(dest('dist/css'));             // Destino del CSS compilado
}
// 3. Exporta la tarea default con watch
exports.default = function() {
    watch('src/scss/**/*.scss', compilarCSS);
};