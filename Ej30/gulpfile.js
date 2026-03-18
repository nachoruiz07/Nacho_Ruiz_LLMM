// Configurar Gulp para:
// 1. SASS -> CSS
// 2. JS -> dist/js
// 3. HTML -> dist/
// 4. Watch
const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function compilarSass() {
    return src('src/scss/main.scss')      
        .pipe(sass().on('error', sass.logError)) 
        .pipe(dest('dist/css'));           
}


function copiarJs() {
    return src('src/js/*.js')             
        .pipe(dest('dist/js'));             
}


function copiarHtml() {
    return src('src/*.html')               
        .pipe(dest('dist'));                 
}


function watchFiles() {
    watch('src/scss/**/*.scss', compilarSass);  
    watch('src/js/*.js', copiarJs);              
    watch('src/*.html', copiarHtml);             
    console.log(' Modo watch activado - Editando archivos en src/');
}


exports.sass = compilarSass;
exports.js = copiarJs;
exports.html = copiarHtml;
exports.watch = watchFiles;


exports.default = parallel(compilarSass, copiarJs, copiarHtml, watchFiles);