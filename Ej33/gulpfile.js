const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
    return src('src/scss/style.scss')
        .pipe(sass())
        .pipe(dest('dist/css'));
}

function html() {
    return src('src/index.html')
        .pipe(dest('dist'));
}

function js() {
    return src('src/js/main.js')
        .pipe(dest('dist/js'));
}

exports.default = function() {
    css();
    html();
    js();
    watch('src/scss/style.scss', css);
    watch('src/index.html', html);
    watch('src/js/main.js', js);
};