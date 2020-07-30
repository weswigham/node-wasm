const gulp = require("gulp");

const build = callback => {
  const asc = require("assemblyscript/bin/asc");
  asc.main([
    "main.ts",
    "--baseDir", "src",
    "--binaryFile", "../build/main.wasm",
    "--runtime", "stub",
    "--sourceMap",
    "--measure"
  ], callback);
};

gulp.task("watch", () => gulp.watch(["src/tsconfig.json", "src/**/*.ts"], build));

exports.build = build;
exports.default = build;
