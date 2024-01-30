## Reasons for packaging and module architecture

The optimal solution would be to have pure ES modules exported in package.json with only like here.
```json 
{
    "type":"module",
    "main":"dist/index.js",
    "types":"dist/index.d.ts"
}
```
In this case, ideally the js build should come from a simple well-configured `tsc` call. 

### Problems
- It is possible to create an ES build of the app, using esbuild targetting node. There are a few caveats in configuring it properly, especially the need to parse some named packages to eliminate dynamic imports, for instance a call to dynamically import css. We can either use the babel plugin or a much simpler esbuild plugin to take care of this removal.
- It is at the moment not stable to make an es build with webpack. There are inconsistencies, such as `import.meta.url` not found in the `@loadable/server` module (with `"type":"module"`) in the ssr renderer function (run with `node`). Even if this was solved by using externals, it remains a bad sign for ESM builds. 
- There was some `require` calls still be made after the ESM builds - unclear what the build configuration was at this time.
- The biggest issue comes from importing server-side cjs only packages. Named imports work but only on some cases. They don't work on `react-relay` or `relay-runtime`. 
[Read this post](https://simonplend.com/node-js-now-supports-named-imports-from-commonjs-modules-but-what-does-that-mean/) for more information about this issue in node. While the ES versions of relay packages are a bit overdue, this is a limitation since these packages always need a default `import Relay from 'react-relay'`. While it is doable to apply a codemode, it would need to also encompass the generated files by the relay compiler. This seems a step too much in trying to make ES builds work with Relay.
- On the other side, it is to be noted that the chain of ES only packages did work **fully** on the front-end side.

### Decided architecture

We use a shared build script (made available with `"bin":` in package.json)

```json 
{
    "main":"dist/cjs/index.js",
    "module":"dist/esm/index.js",
    "types":"dist/types/index.d.ts"
}
```


