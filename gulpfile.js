const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;

/* Sökväg */
const files = {
  htmlPath: "src/**/*.html",
  jsPath: "src/**/*.js"
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

/* Task: watcher */
function watchTask() {
  watch([files.htmlPath, files.jsPath], parallel(copyHTML, jsTask));
}

exports.default = series(parallel(copyHTML, jsTask), watchTask);
