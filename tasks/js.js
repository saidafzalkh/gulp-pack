const { src, dest } = require("gulp");
const path = require("../config/path");

const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const js = () => {
  return src(path.js.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(dest(path.js.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(dest(path.js.dest));
};

module.exports = js;
