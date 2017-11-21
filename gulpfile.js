var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var rename = require('gulp-rename');
var minifyCss = require('gulp-cssnano');
// Static Server + watching scss/html files
gulp.task('server', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("src/css/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/css/*.scss")
        .pipe(sass())
        .on('error', swallowError)
        //.pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['server']);

function swallowError(error) {
    console.log(error.toString())
    this.emit('end')
}