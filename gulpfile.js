var gulp = require('gulp');
var responsive = require('gulp-responsive-images');
// i installed imagemagick for this gulp task

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
  .pipe(gulp.dest('img/responsive'));
});