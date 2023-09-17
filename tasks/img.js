const { src, dest } = require("gulp");
const path = require("../config/path");

const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");

const img = () => {
  return src(path.img.src)
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(imagemin({ verbose: true }))
    .pipe(dest(path.img.dest));
};

module.exports = img;
