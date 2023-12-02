import { src, dest, series, watch } from "gulp";
import del from "del";
import bro from "gulp-bro";
import babelify from "babelify";
import postCss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import compiler from "node-sass";
import cleanCSS from "gulp-clean-css";
import pug from "gulp-pug";
import pugLinter from "gulp-pug-linter";
import webserver from "gulp-webserver";
import rename from "gulp-rename";

const sass = require("gulp-sass")(require("sass"));
sass.compiler = compiler;

const paths = {
  js: {
    src: "src/assets/js/main.js",
    dest: "build",
    watch: "src/assets/js/**/*.js",
  },
  css: {
    src: "src/assets/scss/styles.scss",
    dest: "build",
    watch: "src/assets/scss/**/*.scss",
  },
  html: {
    src: "src/views/index.pug",
    dest: "build",
    watch: "src/views/**/*.pug",
  },
  image: {
    src: "src/assets/images/**/*",
    dest: "build/images",
    watch: "src/assets/images/**/*",
  },
  font: {
    src: "src/assets/fonts/**/*",
    dest: "build/fonts",
    watch: "src/assets/fonts/**/*",
  },
  server: {
    src: "build",
  },
};

const clear = () => del("build");

const js = () =>
  src(paths.js.src)
    .pipe(
      bro({
        transform: [
          babelify.configure({
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          }),
          ["uglifyify", { global: true }],
        ],
      })
    )
    .pipe(dest(paths.js.dest));

const css = () =>
  src(paths.css.src)
    .pipe(sass())
    .pipe(postCss([autoprefixer({ overrideBrowserslist: ["last 1 version"] })]))
    .pipe(cleanCSS())
    .pipe(dest(paths.css.dest));

const html = () =>
  src(paths.html.src)
    .pipe(pugLinter({ reporter: "default" }))
    .pipe(pug())
    .pipe(dest(paths.html.dest));

const image = () => src(paths.image.src).pipe(dest(paths.image.dest));

const font = () => src(paths.font.src).pipe(dest(paths.font.dest));

const watchFiles = () => {
  watch(paths.js.watch, js);
  watch(paths.css.watch, css);
  watch(paths.html.watch, html);
  watch(paths.image.watch, image);
  watch(paths.font.watch, font);
};

const server = () =>
  src(paths.server.src).pipe(
    webserver({
      livereload: true,
      port: 3000,
      open: true,
      fallback: "index.html",
    })
  );

const devBundle = series([
  clear,
  js,
  css,
  html,
  image,
  font,
  server,
  watchFiles,
]);

const buildBundle = series([clear, js, css, html, image, font]);

export const dev = devBundle;

export const build = buildBundle;