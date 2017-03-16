var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var bower = require('gulp-bower');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


var config = {
  js: 'dev/js/*.js',
  sassPath: './sass',
  bowerDir: './bower_components',
  // fontawesome: config.bowerDir + 'fontawesome'
};

// gulp.task('bower', function() {
//   return bower()
//     .pipe(gulp.dest(config.bowerDir));
// });

// gulp.task('icons', function() {
//   return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*)'
//     .pipe(gulp.dest('./public/fonts'))
//   );
// });

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true
  });
});

gulp.task('uglifyjs', function() {
  gulp.src(config.js)
  .pipe(uglify())
  .pipe(rename('init.min.js'))
  .pipe(gulp.dest('public/js/'));
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'server.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});

gulp.task('compile-sass', function () {
  gulp.src('./dev/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dev/css'));
});

gulp.task('concat-css', ['compile-sass'], function () {
  gulp.src('./dev/css/**/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./dev/scss/**/*.scss', ['concat-css'], reload);
});

gulp.task('default', ['browser-sync','uglifyjs','concat-css', 'sass:watch'], function () {
  gulp.watch(['index.html', 'public/css/style.min.css'], reload);
});
