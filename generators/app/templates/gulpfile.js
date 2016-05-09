var gulp = require('gulp');
var del = require("del");

/**
 * Remove dist directory.
 */
gulp.task('clean', function(cb) {
  return del(["dist"], cb);
});

/**
 * Copy all bootstrap fonts into src directory.
 */
gulp.task("move-fonts", function() {
  return gulp.src(["node_modules/bootstrap-sass/assets/fonts/**/glyphicons*.*"], { nodir: true }).pipe(gulp.dest("src/fonts/"));
});
