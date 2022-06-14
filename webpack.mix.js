// webpack.mix.js
const mix = require("laravel-mix");
require("laravel-mix-twig");

mix
  .setPublicPath("dist/")
  .twig({
    enabled: !mix.inProduction(),
    root: "src/views/",
    output: ".",
    beautify: {
      indent_inner_html: true,
    },
  })
  .sass("src/scss/app.scss", "css")
  .js("src/js/app.js", "js")
  .browserSync({
    server: "dist",
    watch: ["*.html"],
  });

// HACK: 1
// mix.webpackConfig({
//   output: {
//     publicPath: "",
//   },
// });

// HACK: 2
// mix.override((config) => {
//   config.entry = Object.keys(config.entry).reduce((acc, key) => {
//     acc[key.replace(/^\//, "")] = config.entry[key];
//     return acc;
//   }, {});
// });
