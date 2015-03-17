var gulp = require('gulp'),
    tsc  = require('gulp-typescript'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

gulp.task('default', ['build', 'watch']);

gulp.task('jade', function() {
    return gulp.src('src/index.jade')
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest('.'));
});

gulp.task('typescript', function() {
   return gulp.src('src/**/*.ts')
        .pipe(tsc())
        .js.pipe(gulp.dest('build'));
});

gulp.task('scss', function() {
    return gulp.src('src/**/*.scss')
    .pipe(sass({ errLogToConsole: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('build', ['typescript', 'scss', 'jade']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['typescript']);
    gulp.watch('src/**/*.scss', ['scss']);
    gulp.watch('src/index.jade', ['jade']);
});
