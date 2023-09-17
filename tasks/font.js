const { src, dest } = require("gulp");
const path = require("../config/path");

const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

const font = () => {
  return src(path.font.src)
    .pipe(newer(path.font.dest))
    .pipe(fonter({ formats: ["ttf", "woff", "eot", "svg"] }))
    .pipe(dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest));
};

module.exports = font;
