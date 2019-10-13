const { src, dest, watch, series, parallel } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create(); /* Live reload */
const concat = require("gulp-concat"); /* Slå samman */
const uglify = require("gulp-uglify-es").default; /* Minimera js */
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

/* Sökväg */
const files = {
  htmlPath: "src/**/*.html",
  jsPath: "src/js/*.js",
  scssPath: "src/scss/*.scss",
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
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/js"))
    .pipe(browserSync.stream());
}

/* Task: kopiera css och gör den ful */
function scssTask() {
  return src(files.scssPath)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
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
    [files.htmlPath, files.jsPath, files.scssPath, files.imgPath],
    parallel(copyHTML, jsTask, scssTask, imgTask)
  ).on("change", browserSync.reload);
}

exports.default = series(
  parallel(copyHTML, jsTask, scssTask, imgTask),
  watchTask
);
