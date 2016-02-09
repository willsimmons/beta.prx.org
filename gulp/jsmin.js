var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat     = require('gulp-concat');
var fflags     = require('../lib/gulp-featureflags');

/**
 * Minify app.js + templates.js
 */
module.exports = function (gulp, config) {
  var devFile = __dirname + '/../config/flags.dev.json';
  var devFeatures = fflags(devFile, {strict: false, default: true});

  var inputs = [config.buildDir + '/assets/app.js', config.buildDir + '/assets/templates.js'];

  return function () {
    return gulp.src(inputs)
      .pipe(concat('app.js.min'))
      .pipe(devFeatures)
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.buildDir + '/assets'));
  };

};
