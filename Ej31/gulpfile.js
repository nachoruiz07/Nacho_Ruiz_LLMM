
// HE ESTADO MUCHO TIEMPO AVERIGUANDO CUAL ES EL FALLO DEL GULP, HE SOLUCIONADO UN PROBLEMA CON LAS RUTAS, PERO AUNQUE SE CONECTE...
// EL GULP SIGUE SIN CAMBIAR NADA, NO ENTIENDO PORQUE YA QUE CREO QUE HE HECHO TODO BIEN

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
    return src('src/scss/style.scss')
        .pipe(sass())
        .pipe(dest('dist/css')); 
}

function js() {
    return src('src/js/main.js')
        .pipe(dest('dist/js'));
}

function html() {
    return src('src/index.html')
        .pipe(dest('dist'));
}

function watchFiles() {
    watch('src/scss/style.scss', css);
    watch('src/js/main.js', js);
    watch('src/index.html', html);
}

exports.css = css;
exports.js = js;
exports.html = html;
exports.watch = watchFiles;
exports.default = function(done) {
    css();
    js();
    html();
    watchFiles();
    done();
};