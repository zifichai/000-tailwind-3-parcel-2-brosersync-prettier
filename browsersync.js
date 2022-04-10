/**
 * Require Browsersync
 */
const browserSync = require("browser-sync");

/**
 * Run Browsersync with server config
 */
browserSync({
  server: "dist",
  open: false,
  files: [
    "dist/*.html",
    "src/*.html",
    "dist/*.css",
    "src/*.css",
    "dist/*js",
    "src/*.js",
  ],
});
