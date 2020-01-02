"use strict";

var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var del = require("del");
var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var runSequence = require("run-sequence");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  "ie >= 10",
  "ie_mob >= 10",
  "ff >= 30",
  "chrome >= 34",
  "safari >= 7",
  "opera >= 23",
  "ios >= 7",
  "android >= 4.4",
  "bb >= 10"
];

// Clean output directory
gulp.task("clean", function() {
  del(["dist"]);
});

gulp.task("styles", function() {
  return (
    gulp
      .src("./src/sass/**/*.scss")
      // Compile SASS files
      .pipe(
        sass({
          outputStyle: "nested",
          precision: 10,
          includePaths: ["."],
          onError: console.error.bind(console, "Sass error:")
        })
      )
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer({ overrideBrowserslist: AUTOPREFIXER_BROWSERS }))
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest("./assets/css"))
  );
});

gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", gulp.series(["styles"]));
});

// Gulp task to minify all files
gulp.task("default", gulp.parallel("clean", "styles", "watch"));
