const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create(); /* Live reload */
const concat = require("gulp-concat"); /* Slå samman */
const uglify = require("gulp-uglify-es").default; /* Minimera js */
var uglifycss = require("gulp-uglifycss"); /* Minimera css */

/* Sökväg */
const files = {
  htmlPath: "src/**/*.html",
  jsPath: "src/js/*.js",
  cssPath: "src/css/*.css",
  imgPath:
    "src/images/**/*" /* Samtliga filer oavsett filtyp och underkataloger */
};

/* Task: kopiera HTML */
function copyHTML() {
  return src(files.htmlPath)
    .pipe(dest("build"))
    .pipe(browserSync.stream()); /* browserSync läggs i slutet för initiering */
}

/* Task: sammanslå js-filer, minifiera filer */
function jsTask() {
  return src(files.jsPath)
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("build/js"))
    .pipe(browserSync.stream());
}

/* Task: kopiera css och gör den ful */
function cssTask() {
  return src(files.cssPath)
    .pipe(concat("main.css"))
    .pipe(uglifycss())
    .pipe(dest("build/css"))
    .pipe(browserSync.stream());
}

/* Task: kopiera img  */
function imgTask() {
  return src(files.imgPath)
    .pipe(dest("build/images"))
    .pipe(browserSync.stream());
}

/* Task: watcher */
function watchTask() {
  /* Livereload med extra plugins */
  browserSync.init({
    server: {
      baseDir: "build/"
    },
    /* Tillåter andra enheter (mobiler ex.) på samma nätverk att ansluta till hemsidan */
    online: true,
    tunnel: true,
    logLevel: "debug"
  });

  watch(
    [files.htmlPath, files.jsPath, files.cssPath, files.imgPath],
    parallel(copyHTML, jsTask, cssTask, imgTask)
  ).on("change", browserSync.reload);
}

exports.default = series(
  parallel(copyHTML, jsTask, cssTask, imgTask),
  watchTask
);
