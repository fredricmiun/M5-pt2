const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;

/* Sökväg */
const files = {
  htmlPath: "src/**/*.html",
  jsPath: "src/**/*.js",
  cssPath: "src/css/*.css"
};

/* Task: kopiera HTML */
function copyHTML() {
  return src(files.htmlPath).pipe(dest("pub"));
}

/* Task: sammanslå js-filer, minifiera filer */
function jsTask() {
  return src(files.jsPath)
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("pub/js"));
}

/* Task: kopiera css och gör den ful */
function cssTask() {
  return src(files.cssPath).pipe(dest("pub/css"));
}

/* Task: watcher */
function watchTask() {
  watch(
    [files.htmlPath, files.jsPath, files.cssPath],
    parallel(copyHTML, jsTask, cssTask)
  );
}

exports.default = series(parallel(copyHTML, jsTask, cssTask), watchTask);
