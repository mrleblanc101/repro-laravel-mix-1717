// webpack.mix.js
let mix = require("laravel-mix");
require("laravel-mix-twig");

mix
  .twig({
    root: "src/views/",
    output: ".",
  })
  .js("src/js/app.js", "dist")
  .setPublicPath("dist")
  .browserSync({
    server: "dist/",
  });
