const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compilar SCSS a CSS
function css() {
    return src('src/scss/style.scss')
        .pipe(sass())
        .pipe(dest('dist/css'));
}

// Copiar HTML ESTAS FUNCIONES TODAS LAS PONGO POR SI ACASO, YA QUE ESTE GULP ES EL QUE USÉ EN OTROS EJERCICIOS Y ME FUNCIONO BIEN
function html() {
    return src('src/index.html')
        .pipe(dest('dist'));
}

// Copiar JS
function js() {
    return src('src/js/main.js')
        .pipe(dest('dist/js'));
}

// Copiar XML y XSD
function xml() {
    return src('src/data/*.xml')
        .pipe(dest('dist/data'));
}

function xsd() {
    return src('src/data/*.xsd')
        .pipe(dest('dist/data'));
}

// Vigilar cambios
function watchFiles() {
    watch('src/scss/style.scss', css);
    watch('src/index.html', html);
    watch('src/js/main.js', js);
    watch('src/data/*.xml', xml);
    watch('src/data/*.xsd', xsd);
}

// Tareas
exports.css = css;
exports.html = html;
exports.js = js;
exports.xml = xml;
exports.xsd = xsd;
exports.watch = watchFiles;
exports.default = function(done) {
    css();
    html();
    js();
    xml();
    xsd();
    watchFiles();
    done();
};