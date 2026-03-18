const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');


function css() {
    return src('src/scss/style.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest('dist/css'));
}

// Copiar HTML
function html() {
    return src('src/index.html')
        .pipe(dest('dist'));
}

// Copiar JS
function js() {
    return src('src/js/main.js')
        .pipe(dest('dist/js'));
}

// Copiar datos
function datos() {
    return src('src/data/*.{xml,xsd}')
        .pipe(dest('dist/data'));
}

// Vigilar cambios
function watchFiles() {
    watch('src/scss/**/*.scss', css);
    watch('src/index.html', html);
    watch('src/js/main.js', js);
    watch('src/data/*.{xml,xsd}', datos);
}


exports.default = parallel(css, html, js, datos, watchFiles);