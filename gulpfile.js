/* Look into GulpIf */
'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let sass = require('gulp-sass');
let del = require('del');
 
gulp.task('default', ['watch']);

gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', ['build:js']);
  gulp.watch('./src/**/*.scss', ['build:css']);
  gulp.watch('./src/**/*.jade', ['build:html']);
});

gulp.task('build:app', ['build:js', 'build:css', 'build:html']);

gulp.task('build:js', () => {
  gulp.src('./src/**/*.js')
    .pipe(babel({ presets: ['es2015']}))
    .pipe(gulp.dest('build'));
});

gulp.task('build:css', () => {
  gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'));
});

gulp.task('build:html', () => {
  gulp.src('./src/**/*.jade')
    .pipe(gulp.dest('build'));
});

gulp.task('clean', () => {
  del(['build']);
});
