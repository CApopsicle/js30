const gulp = require('gulp');
const gulpWebServer = require('gulp-webserver');

gulp.task('default', ['sass', 'js', 'webserver']);

gulp.task('webserver', () => {
  gulp.src('./')
    .pipe(gulpWebServer({
      livereload: true,
      directoryListing: true,
      open: true,
    }));
});

