var gulp = require('gulp');
var responsive = require('gulp-responsive-images');// i installed imagemagick for this gulp task
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');

gulp.task('copy-html', function(){
  gulp.src('{index,restaurant}.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('copy-style', function(){
  gulp.src('css/styles.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function(){
  browserify({
    entries: [
      'js/main.js',
      'js/dbhelper.js',
      'js/common.js',
      'js/restaurant_info.js'
    ],
    transform: babelify
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  //.pipe(uglify())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
  gulp.src('img/*.jpg')
  .pipe(responsive({
    '*.jpg': [{
      width: 236,
      suffix: '-236'
    },{
      width: 300,
      suffix: '-300'
    },{
      width: 480,
      suffix: '-480'
    },{
      width: 600,
      suffix: '-600'
    },{
      width: 800,
      suffix: '-800'
    }]
  }))
  .pipe(gulp.dest('img/responsive'))
  .pipe(gulp.dest('dist/img/responsive'));
});

gulp.task('build', ['copy-html', 'copy-style', 'scripts']);