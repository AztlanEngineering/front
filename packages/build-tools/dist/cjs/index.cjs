var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  buildOrWatch: () => buildOrWatch
});
module.exports = __toCommonJS(src_exports);
var esbuild = __toESM(require("esbuild"), 1);
var import_esbuild_plugin_file_path_extensions = require("esbuild-plugin-file-path-extensions");
var import_resolve_glob = __toESM(require("resolve-glob"), 1);
var import_copyfiles = __toESM(require("copyfiles"), 1);
const buildOrWatch = async (config) => {
  const args = process.argv;
  const indexOfFormat = args.indexOf("--format") + 1;
  const format = indexOfFormat ? args.at(indexOfFormat) : void 0;
  if (!format) {
    console.error("No --format was provided. Options are cjs and esm.");
  }
  const watch = args.indexOf("--watch") > 0;
  const entryPoints = import_resolve_glob.default.sync(config.entryPoints, {
    ignore: config.ignore
    // ['**/*.test.js', '**/*.spec.js', '**/*.stories.js']
  });
  const indexFiles = entryPoints.filter((name) => name.endsWith("index.ts"));
  const mainFiles = entryPoints.filter((name) => !name.endsWith("index.ts"));
  const buildArgs = {
    entryPoints,
    outdir: `dist/${format}/`,
    // target:"cjs",
    format,
    logLevel: "debug",
    outExtension: { ".js": `.${format === "cjs" ? "cjs" : "mjs"}` },
    supported: {
      // https://esbuild.github.io/api/#supported
      "object-rest-spread": true
    },
    metafile: true
    // external:['*.scss', 'node_modules/*', '../../node_modules/*'],
  };
  const indexBuildArgs = {
    ...buildArgs,
    entryPoints: indexFiles,
    bundle: true,
    plugins: [
      (0, import_esbuild_plugin_file_path_extensions.esbuildPluginFilePathExtensions)({
        esm: format === "esm"
        // filter:/.*index.*/,
      })
    ]
  };
  const mainBuildArgs = {
    ...buildArgs,
    entryPoints: mainFiles
  };
  if (watch) {
    const ctx = await esbuild.context(buildArgs);
    await ctx.watch();
    console.log("watching...");
  } else {
    const result = await esbuild.build(indexBuildArgs).catch(() => process.exit(1));
    console.log(
      await esbuild.analyzeMetafile(result.metafile, { verbose: true })
    );
    const result2 = await esbuild.build(mainBuildArgs).catch(() => process.exit(1));
    console.log(
      await esbuild.analyzeMetafile(result.metafile, { verbose: true })
    );
  }
  if (config.copyfiles) {
    (0, import_copyfiles.default)(
      [...config.copyfiles, `dist/${format}`],
      {
        up: config.copyfilesUp || 2,
        verbose: true
      },
      (a) => console.log(a)
    );
  }
};
