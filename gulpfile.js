var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
// var themePath = 'themes/market/';
var semanticWatch = require('./vendors/semantic/tasks/watch');
var semanticBuild = require('./vendors/semantic/tasks/build');

gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass({
      includePaths: [
        'node_modules/foundation-sites/scss',
        'node_modules/motion-ui/src'
      ],
      sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'
    }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
    // .pipe(livereload())
    ;
});

gulp.task('watch', function () {
  // livereload.listen();
  gulp.watch([
    './assets/scss/**/*.scss',
    'gulpfile.js',
    './node_modules/foundation-sites/scss/**/*.scss',
  ], ['sass']);
});

gulp.task('semanticWatch', semanticWatch);
gulp.task('semanticBuild', semanticBuild);

gulp.task('default', [ 'sass', 'watch' ]);