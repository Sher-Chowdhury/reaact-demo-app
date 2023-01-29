# react_study_guide

ref: 
- https://reactjs.org/
- https://reactjs.org/docs/hello-world.html
- https://nextjs.org/learn/foundations/from-javascript-to-react


React is used to describe user interfaces. Hence react is declarative. 

Why react?

pros of using react:

-  can use "virtual browser" instead of DOM API which is a little harder.
- can be used for building mobile apps
- It's a declarative language (model UI and state)


In react, we used "components" to describe UI. Components are actually are javascript functions that:
- accepts a single object-based variable, which by convention is named as "props"
- returns a value, that looks like some html code (but is actually jsx syntax)


i.e., components have "inputs" and "outputs".
The inputs are:

- props (aka properties)

And the outputs are:
- UI

components are reusable, and components can contain other components.

You simply call react components from within html code, using this html-like syntax:

```
<component />
```

I.e. we can embed components like a regular html element.

components can store private state data, for it's component's lifetime.

React is reactive, i.e. when the (private) "state" (input) changes, then the UI (output) changes as well.

This means, react works a bit like ajax, if you fill in some text fields, it can automatically show a preview elsewhere without need to refresh the page. 


We don't actually write any html code, javascript/react will automatically generate the html code for us. 

Instead we do write jsx code, that looks very similar to html code. This jsx is what component (functions) ends up returning. 


A react component can be written in the form of a:

- Function component
- Class component

But function component is recommended because it is relatively simpler.

A component accepts two input parameters:

- props (this contains fixed values)
- states (this is used to hold changing values)

This means components can make changes to states, but not props. 

and one return value. This value looks like a bit of html code, but it's actually a special syntax called jsx. 

React takes this jsx code and generates javascript code. This javascript code is what then get's processed by the web brower's builtin javascript engine, into html code.  


There's 2 ways to create a new react project.

1. create-react-app - https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
2. manually. 

### create-react-app approach

https://www.npmjs.com/package/create-react-app

There's 2 ways:

```
npm -i -g create-react-app
create-react-app 01-my-hello-world-app
```

but a better approach is:

```
npx create-react-app 01-my-hello-world-app
```

`npx` just downloads the latest `create-react-app` binary and uses it. npx always gets the latest version. So you don't have to worry about getting the latest version. Here's what the output looks like:

```

```

note: the "x" in `npm` means "execute", i.e. we want to execute a node package.  

```
npx create-react-app 01-my-hello-world-app

npx: installed 67 in 26.281s

Creating a new React app in /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


> core-js@3.22.2 postinstall /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.22.2 postinstall /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

+ cra-template@1.2.0
+ react-scripts@5.0.1
+ react@18.0.0
+ react-dom@18.0.0
added 1366 packages from 618 contributors in 215.697s

174 packages are looking for funding
  run `npm fund` for details


Installing template dependencies using npm...
npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN @apideck/better-ajv-errors@0.3.3 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN fork-ts-checker-webpack-plugin@6.5.1 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ web-vitals@2.1.4
+ @testing-library/jest-dom@5.16.4
+ @testing-library/react@13.1.1
+ @testing-library/user-event@13.5.0
added 39 packages from 109 contributors in 13.735s

174 packages are looking for funding
  run `npm fund` for details

Removing template package using npm...

npm WARN @apideck/better-ajv-errors@0.3.3 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN fork-ts-checker-webpack-plugin@6.5.1 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

removed 1 package and audited 1404 packages in 6.077s

174 packages are looking for funding
  run `npm fund` for details

found 1 moderate severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

Success! Created 01-my-hello-world-app at /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd 01-my-hello-world-app
  npm start

Happy hacking!
```

this ends up creating the following folder and contents:

```
cd 01-my-hello-world-app
tree -I node_modules    

.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js

2 directories, 17 files
```

Ref - https://github.com/Sher-Chowdhury/react-demo-app/commit/f64a5a3ae7777bd37479c4fca6b245f0b2fa04a5


`-I` is to ignore the node_module's folder. 

The package.json shows the make up of this project:

```
cat package.json 
{
  "name": "01-my-hello-world-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.1.1",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```


You can now start it up

```
npm start
```


Here's what the `src/App.js` looks like:

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Notice the `import` statements pulls in non-node-packages, e.g. css. That's possible because this app comes with a lot of built in configurations to make that possible. To see all these hidden configurations, run the exect command:

```
npm run eject

> 01-my-hello-world-app@0.1.0 eject /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app
> react-scripts eject

NOTE: Create React App 2+ supports TypeScript, Sass, CSS Modules and more without ejecting: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

✔ Are you sure you want to eject? This action is permanent. … yes
Ejecting...

Copying files into /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app
  Adding /config/env.js to the project
  Adding /config/getHttpsConfig.js to the project
  Adding /config/modules.js to the project
  Adding /config/paths.js to the project
  Adding /config/webpack.config.js to the project
  Adding /config/webpackDevServer.config.js to the project
  Adding /config/jest/babelTransform.js to the project
  Adding /config/jest/cssTransform.js to the project
  Adding /config/jest/fileTransform.js to the project
  Adding /scripts/build.js to the project
  Adding /scripts/start.js to the project
  Adding /scripts/test.js to the project
  Adding /config/webpack/persistentCache/createEnvironmentHash.js to the project

Updating the dependencies
  Removing react-scripts from dependencies
  Adding @babel/core to dependencies
  Adding @pmmmwh/react-refresh-webpack-plugin to dependencies
  Adding @svgr/webpack to dependencies
  Adding babel-jest to dependencies
  Adding babel-loader to dependencies
  Adding babel-plugin-named-asset-import to dependencies
  Adding babel-preset-react-app to dependencies
  Adding bfj to dependencies
  Adding browserslist to dependencies
  Adding camelcase to dependencies
  Adding case-sensitive-paths-webpack-plugin to dependencies
  Adding css-loader to dependencies
  Adding css-minimizer-webpack-plugin to dependencies
  Adding dotenv to dependencies
  Adding dotenv-expand to dependencies
  Adding eslint to dependencies
  Adding eslint-config-react-app to dependencies
  Adding eslint-webpack-plugin to dependencies
  Adding file-loader to dependencies
  Adding fs-extra to dependencies
  Adding html-webpack-plugin to dependencies
  Adding identity-obj-proxy to dependencies
  Adding jest to dependencies
  Adding jest-resolve to dependencies
  Adding jest-watch-typeahead to dependencies
  Adding mini-css-extract-plugin to dependencies
  Adding postcss to dependencies
  Adding postcss-flexbugs-fixes to dependencies
  Adding postcss-loader to dependencies
  Adding postcss-normalize to dependencies
  Adding postcss-preset-env to dependencies
  Adding prompts to dependencies
  Adding react-app-polyfill to dependencies
  Adding react-dev-utils to dependencies
  Adding react-refresh to dependencies
  Adding resolve to dependencies
  Adding resolve-url-loader to dependencies
  Adding sass-loader to dependencies
  Adding semver to dependencies
  Adding source-map-loader to dependencies
  Adding style-loader to dependencies
  Adding tailwindcss to dependencies
  Adding terser-webpack-plugin to dependencies
  Adding webpack to dependencies
  Adding webpack-dev-server to dependencies
  Adding webpack-manifest-plugin to dependencies
  Adding workbox-webpack-plugin to dependencies

Updating the scripts
  Replacing "react-scripts start" with "node scripts/start.js"
  Replacing "react-scripts build" with "node scripts/build.js"
  Replacing "react-scripts test" with "node scripts/test.js"

Configuring package.json
  Adding Jest configuration
  Adding Babel preset

Running npm install...
audited 1410 packages in 6.043s

174 packages are looking for funding
  run `npm fund` for details

found 1 moderate severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
Ejected successfully!

Staged ejected files for commit.

Please consider sharing why you ejected in this survey:
  http://goo.gl/forms/Bi6CZjk1EqsdelXk1
  ```

Here's what's changed:

```
git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   config/env.js
        new file:   config/getHttpsConfig.js
        new file:   config/jest/babelTransform.js
        new file:   config/jest/cssTransform.js
        new file:   config/jest/fileTransform.js
        new file:   config/modules.js
        new file:   config/paths.js
        new file:   config/webpack.config.js
        new file:   config/webpack/persistentCache/createEnvironmentHash.js
        new file:   config/webpackDevServer.config.js
        new file:   scripts/build.js
        new file:   scripts/start.js
        new file:   scripts/test.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   package-lock.json
        modified:   package.json
```

ref - https://github.com/Sher-Chowdhury/react-demo-app/commit/fcbba5d740b07c7b156253c3ce9487181030fbbd

In particular see how the package.json has changed - https://github.com/Sher-Chowdhury/react-demo-app/commit/fcbba5d740b07c7b156253c3ce9487181030fbbd#diff-e0e8246784d4f8be8414321166cbbc3aa4398a20b43a57d1d5bcc197d074e7f7

It essentially removed the wrapper tool and replaced it with the core underlying code. 

A project setup like this is pretty much overkill, and you're unlikely to need all these features. 


## Manually create a project

It's recommended to follow this guide - https://jscomplete.com/learn/1rd-reactful

also see - https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

```
$ mkdir 02-my-hello-world-app

$ cd 02-my-hello-world-app

$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (02-my-hello-world-app) 
version: (1.0.0) 
description: hello world app
entry point: (index.js) 
test command: 
git repository: https://github.com/Sher-Chowdhury/react-demo-app
keywords: hello-world
author: Sher Chowdhury
license: (ISC) MIT
About to write to /Users/sherchowdhury/github/react-demo-app/02-my-hello-world-app/package.json:

{
  "name": "02-my-hello-world-app",
  "version": "1.0.0",
  "description": "hello world app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Sher-Chowdhury/react-demo-app.git"
  },
  "keywords": [
    "hello-world"
  ],
  "author": "Sher Chowdhury",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/Sher-Chowdhury/react-demo-app/issues"
  },
  "homepage": "https://github.com/Sher-Chowdhury/react-demo-app#readme"
}


Is this OK? (yes) yes
```

This creates the `package.json` file, ref - https://github.com/Sher-Chowdhury/react-demo-app/commit/9e5a12bc97ca50e39146a209c67c73008c74ec66


Now run:

```
npm install express
```

This downloads the `express` into the node_modules folder, and also adds express to the packages.json dependencies section. 

ref - https://github.com/Sher-Chowdhury/react-demo-app/commit/1702ec1d5bc8b8e3c406e070f2759fab70b30075

now run

```
npm install react react-dom
npm install webpack webpack-cli
npm install npm install babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react
```

- react - https://www.npmjs.com/package/react
- react-dom - https://www.npmjs.com/package/react-dom - This takes all the jsx code, and renders it to standard html+javascript code that web browsers understands (actually I think it's react api calls). 

- webpack - https://www.npmjs.com/package/webpack - this bundles all the js code into a single file. 
- webpack-cli - https://www.npmjs.com/package/webpack-cli - This provides the webpack binary. 

- babel - converts react's jsx code into react-api calls. 

E.g. go to https://babeljs.io/ , then click "try it out", then enter `<h1>hello</h1>`. 


Optionally install this Dev dependency:

```
npm install -D nodemon
```

nodemon - - autoruns `npm stop ; npm start` app when any code changes are made.


I dont think this is needed when using the webstorm IDE. 


next install eslint - https://www.npmjs.com/package/eslint

```
npm install -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks
```

Note: `babel-eslint` is deprecated. I'll cover that later. 


now create the `.eslintrc.js` file - https://github.com/Sher-Chowdhury/react-demo-app/commit/370e65a63542dfe9ae226e37fcc562ffe4daf522

then install a testing library. Mocha is very popular, but for react based apps, it's Jest that is normally used  

```
npm install -D jest babel-jest react-test-renderer
```

Ref - https://github.com/Sher-Chowdhury/react-demo-app/commit/bff2545c48aace013800f5fecd5b0d180e70e8c8


Now, need to create a folder structure to put all the code, this is up to you, but here's one approach:

```
mkdir -p reactful/dist
touch reactful/dist/main.js

mkdir reactful/src
touch reactful/src/index.js

mkdir reactful/src/components
touch reactful/src/components/app.js

mkdir reactful/src/server
touch reactful/src/server/server.js

tree reactful                              
reactful
├── dist
│   └── main.js
└── src
    ├── components      # this should contain xxxx. 
    │   └── app.js
    ├── index.js
    └── server          # this should contain the express code
        └── server.js
```

Now create this 2 top level files:

```
touch babel.config.js
touch webpack.config.js
```

`webpack` by default looks for a `src/index.js` and bundles the code. By default it will output this bundle to `dist/main.js`.

webpack has to be configured to tell it to first parse the code via babel before compiling it. So that all jsx syntax are rendered to js code.


That's why we have created the above folder structure, so that we can stick with these defaults, rather than overriding them with custom configs. 

ref - https://github.com/Sher-Chowdhury/react-demo-app/commit/ad04cd45af86f4bf0c7085343dfaac797de2524e

now we configure package.json to use jest, nodemon, babel, and webpack - https://github.com/Sher-Chowdhury/react-demo-app/commit/f9a96934d96d24c53e92b2c84e12e9e3469d0341


Next create a dummy app. 

Note I was getting red squiggly error lines here, saying,

```
Parsing error: require() of ES Module /Users/sherchowdhury/github/react-demo-app/02-my-hello-world-app/node_modules/eslint-scope/lib/definition.js from /Users/sherchowdhury/github/react-demo-app/02-my-hello-world-app/node_modules/babel-eslint/lib/require-from-eslint.js not supported.
Instead change the require of definition.js in /Users/sherchowdhury/github/react-demo-app/02-my-hello-world-app/node_modules/babel-eslint/lib/require-from-eslint.js to a dynamic import() which is available in all CommonJS modules.
```

I found the fix here - https://stackoverflow.com/a/69557309


```
npm uninstall -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks
npm install -D eslint @babel/eslint-parser eslint-plugin-react eslint-plugin-react-hooks

```




Now to test out all is working, try running the app:

```
$ npm run dev:server
$ npm run dev:bundler  # run this in a second terminal
```

Then open - http://localhost:4242/

also use chrome's developer tools to see if you get any errors. 

The `dist/main.js` is a single big file generated by the webpack tool. This is what the web browser recieves. 
