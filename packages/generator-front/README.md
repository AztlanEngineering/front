# Generator-front (`Yeoman`) <code><img height="30" src="https://avatars.githubusercontent.com/u/1714870?s=200&v=4"></code>

Yeoman is a client-side scaffolding tool for web applications. We use this to quickly scaffold a component, module, page and story.

## Project Installation and Setup

```sh
# If you have configured the SSH protocol, use
$ git clone git@github.com:HelloPareto/generator-front.git

cd generator-front

npm install
```

## Usage
* Install the `@pareto-engineering/generator-front` package globally
    ```sh
    $ npm i -g yo @pareto-engineering/generator-front # you might need an older version of yo
    ```


* Navigate to the folder you want to scaffold either a component, story, module, or page
    ```sh
    // For a component
    $ yo @pareto-engineering/front component [name] # this creates a folder with [name] as it's name with three files in it --> [name].jsx, index.js, styles.scss

    // For a story
    $ yo @pareto-engineering/front story [name] # this creates a [name].stories.jsx file --> A story captures the rendered state of a UI component and describes all the states a component can support

    // For a page
    $ yo @pareto-engineering/front page [name] # this creates a [name].jsx file

    // For a module
    $ yo @pareto-engineering/front module [name] # this creates a folder with [name] as it's name. The folder has urls.js and routes.js files, component and pages folders both having an index.js file
    ```
