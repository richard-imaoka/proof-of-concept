var gulp        = require('gulp');
var gutil       = require('gulp-util');

var glob        = require('glob');
var browserSync = require('browser-sync').create();

var browserify  = require('browserify');
var babelify    = require('babelify');
var watchify    = require('watchify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var sourcemaps  = require('gulp-sourcemaps');
var assign      = require('lodash.assign');
var uglify      = require('gulp-uglify')

// add custom browserify options here
var customOpts = {
  entries: glob.sync('./src/js/**/*.js'),
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)).transform(babelify, {presets: ["es2015", "react"]});
gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle);  // on any dep update, runs the bundler
b.on('log', gutil.log);  // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    //.pipe(uglify())                         // lol, sourcemap got much bigger using uglify
    // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}

gulp.task('watch', function () {
  gulp.watch("css/*.css",       browserSync.reload);
  gulp.watch("dist/*.js",           browserSync.reload);
  gulp.watch("img/*.{png,jpg,svg}", browserSync.reload);
  gulp.watch("*.html",              browserSync.reload);
  gulp.watch("lessons/*/*.{html,css,js,json}", browserSync.reload);
});

gulp.task('browser-sync', function() {
  //Start the Browsersync service. This will launch a server.
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default',  ['browser-sync', 'watch', 'js']);

