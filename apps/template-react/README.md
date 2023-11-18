install
- add .env `GRAPHQL_ENDPOINT`
- add .env.scripts

known bugs
- the ssr renderer requires a start after codde change (watch is not recompiling)

to run ssr :
- first `npm run compile:prod` to compile the front end for production. Contains a manifest of generated files used by the backend to put together the app.
- second `npm run ssr`
- changes in the client are not taken into account (see known bugs)
