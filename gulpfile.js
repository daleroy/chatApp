var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task('bundle', function() {
  return browserify('./src/app.js')
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('chatApp.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('copyhtml', function() {
   gulp.src('./src/index.html}')
   .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['bundle', 'copyhtml']);

