const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest,
  },

  sass: {
    src: pathSrc + "/sass/main.scss",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/styles",
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/scripts",
  },

  img: {
    src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/images",
  },

  font: {
    src: pathSrc + "/font/*.{eot,ttf,otf,otc,woff,woff2,svg}",
    watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,woff,woff2,svg}",
    dest: pathDest + "/fonts",
  },
};
