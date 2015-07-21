var gulp       = require('gulp'),
    minify     = require('gulp-minify-css'),
    // prefix     = require('gulp-autoprefixer'),
    // concat     = require('gulp-concat'),
    del        = require('del'),
    scss       = require('gulp-sass');

var options = {
  del : {
    force : true
  }
  // ,
  // prefix : {
  //     browsers : ['last 2 versions'],
  //     cascade : false,
  //     remove : true
  // },
  // minify : {
  //   keepSpecialComments : 0
  // }
};

var paths = {
    scss : 'stylesheets/',
    dist : 'gen/',
}
// Cleaning CSS Output Directory
gulp.task('clean:css', function(){
    return del([paths.dist+'css'], options.del, function(){
        console.log('Cleaning CSS Complete');
    });
});
// SCSS Compilation, prefixing and minification.
gulp.task('scss',['clean:css'], function(){
  return gulp.src(paths.scss+"application.scss")
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest(paths.dist+'css'));
});

// SCSS Compilation, prefixing and minification.
gulp.task('scss:minify',['clean:css'], function(){
  return gulp.src(paths.scss+"application.scss")
    .pipe(scss().on('error', scss.logError))
    .pipe(minify(options.minify))
    .pipe(gulp.dest(paths.dist+'css'));
});

