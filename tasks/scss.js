const { src, dest } = require("gulp");
const path = require("../config/path");

const autoprefixer = require("gulp-autoprefixer");
const ccso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const groupMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
// const webCSS = require("gulp-webp-css");

const scss = () => {
  return (
    src(path.sass.src, { sourcemaps: true })
      .pipe(sassGlob())
      .pipe(sass())
      // .pipe(webCSS())
      .pipe(autoprefixer())
      .pipe(shorthand())
      .pipe(groupMediaQueries())
      .pipe(dest(path.sass.dest, { sourcemaps: true }))
      .pipe(ccso())
      .pipe(rename({ suffix: ".min" }))
      .pipe(dest(path.sass.dest))
  );
};

module.exports = scss;
