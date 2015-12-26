/* Look into GulpIf */

var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var clean = require('gulp-clean');

gulp.task('default', function() {
  gulp.watch('src/stylesheets/**/*.scss', ['build:css-all']);
  gulp.watch('src/**/*.js', ['build:js-all']);
});

gulp.task('build:app', ['build:js', 'build:css']);

gulp.task('clean:app', function() {
  gulp.src('./app/**/*.js', {read: false})
    .pipe(clean());
  gulp.src('./app/**/*.css', {read: false})
    .pipe(clean());
});

/* Later build specific sheets */
gulp.task('build:css', ['build:css-all']);

gulp.task('build:css-all', function() {
  gulp.src('./src/stylesheets/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/public/stylesheets/'));
});

/* Later build specific compiled JS */
gulp.task('build:js', ['build:js-all']);

gulp.task('build:js-all', ['jshint-all', 'jscs-all'], function() {
  gulp.src('./src/server/**/*.js')
    .pipe(gulp.dest('./app/'));

  gulp.src('./src/client/**/*.js')
    // Concat and Minify
    .pipe(gulp.dest('./app/public/javascript'));
});

gulp.task('jshint-all', function() {
  gulp.src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jscs-all', function() {
  gulp.src('./src/**/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter());
});
