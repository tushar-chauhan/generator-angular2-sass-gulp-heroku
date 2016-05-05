var gulp = require('gulp');
var del = require("del");
var sass = require('gulp-sass');

/**
 * Remove build directory.
 */
gulp.task('clean', function(cb) {
  return del(["build"], cb);
});

gulp.task("move-index-html", function() {
  return gulp.src(["app/index.html", "favicon.ico"], { nodir: true }).pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not index.html & TypeScript files into build directory.
 */
gulp.task("move-templates", function() {
  return gulp.src(["app/**/*", "!**/*.ts", "!**/index.html"], { nodir: true }).pipe(gulp.dest("build/app"));
});

/**
 * Copy all bootstrap fonts into build directory.
 */
gulp.task("move-fonts", function() {
  return gulp.src(["node_modules/bootstrap-sass/assets/fonts/**/glyphicons*.*"], { nodir: true }).pipe(gulp.dest("build/fonts/"));
});


gulp.task('compile-sass', function() {
  gulp.src('styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('build/styles/'));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("cleanup", ['move-fonts', 'move-index-html', 'move-templates', 'compile-sass'], function() {
  return gulp.src([
          'es6-shim/es6-shim.min.js',
          'systemjs/dist/system-polyfills.js',
          'angular2/bundles/angular2-polyfills.js',
          'angular2/es6/dev/src/testing/shims_for_IE.js',
          'systemjs/dist/system.src.js',
          'rxjs/bundles/Rx.js',
          'angular2/bundles/angular2.dev.js',
          'angular2/bundles/router.dev.js',
          'bootstrap-sass/assets/javascripts/bootstrap.min.js'
      ], {cwd: "node_modules/**"}) /* Glob required here. */
      .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and SCSS files.
 */
gulp.task('watch', function () {
  gulp.watch('styles/**/*.scss', ['compile-sass']).on('change', function(e) {
    console.log('SCSS file ' + e.path + ' has been changed. Compiling...');
  });
  gulp.watch(["app/**/*.html", "!**/index.html"], ['move-templates']).on('change', function (e) {
    console.log('Template file ' + e.path + ' has been changed. Updating...');
  });
  gulp.watch(["app/index.html"], ['move-index-html']).on('change', function (e) {
    console.log('Index file ' + e.path + ' has been changed. Updating...');
  });
});
