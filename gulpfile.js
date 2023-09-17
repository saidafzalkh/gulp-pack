const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync");
const path = require("./config/path");

// Tasks
const html = require("./tasks/html");
const clear = require("./tasks/clear");
const scss = require("./tasks/scss");
const js = require("./tasks/js");
const img = require("./tasks/img");
const font = require("./tasks/font");

const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.sass.watch, scss).on("all", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
  watch(path.font.watch, font).on("all", browserSync.reload);
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Commands
exports.dev = series(
  clear,
  parallel(html, scss, js, img, font),
  parallel(watcher, server)
);
