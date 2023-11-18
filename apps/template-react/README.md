install
- add .env `GRAPHQL_ENDPOINT`
- add .env.scripts

known bugs
- the ssr renderer requires a start after codde change (watch is not recompiling)

to run ssr :
- first `npm run compile:prod` to compile the front end for production. Contains a manifest of generated files used by the backend to put together the app.
- second `npm run ssr`
- changes in the client are not taken into account (see known bugs)

to remove ssr :
- remove `compile` and `start` scripts relevant to `ssr` or `sitemap`
- update `compile:all` script
- if possible, remove webpack dependencies before the following
- remove `./src/ssr` and `./src/sitemap` directories
- remove corresponding webpack config
- remove unneeded ci
- on Vercel, make sure the build script and env variables are properly configured (as it doesnt happen on github anymore)
