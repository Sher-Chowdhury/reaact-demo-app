Ref - https://jscomplete.com/learn/1rd-reactful

Using node version:

```shell
$ nvm use stable
$ node --version                                    
v18.10.0
```

start a new project and install packages:

```shell
mkdir my-app1
cd my-app1
npm init -y
npm install express           # nodejs webserver software  
npm install react react-dom   # these can also be installed as devDependencies
npm install webpack webpack-cli # converts all the code into a single javascript file (bundle.js). 
```

Install Babel, this converts code jsx syntax (that are in *.jsx files) to javascript code:

```shell
npm install babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react
```

Create the folder structure:

```shell
mkdir src
mkdir dist
touch dist/main.js
touch src/index.js
mkdir src/components
mkdir src/server
touch src/components/app.js
touch src/server/server.js
```

The resulting structure should look like:

<img width="625" alt="image" src="https://user-images.githubusercontent.com/11390994/206868957-3001a5cb-effe-4e73-97ad-9e16079fe137.png">


```shell
cd my-app1
touch babel.config.js
cat babel.config.js

module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
};

```

[Babel](https://babeljs.io/) is general purpose syntax transformer, of which react's jsx is only of type syntax that babel supports. 
So you have to tell babel which syntax types it needs to transform by setting the presets setting. Here we added a list of syntax types:

- `@babel/preset-env` - modern javascript (as opposed to the really old 2015 standard)
- `@babel/preset-react` - react code, i.e. jsx syntax.

Now need to tell [configure webpack](https://webpack.js.org/configuration):

```shell
touch webpack.config.js
cat webpack.config.js

const path = require("path");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};
```

Here's what the these setting means. 


`entry` - what is the starting point of our javascript app. 
`output` - let you choose where to store the resulting output
`output.path` - directory to store the resulting output js file. This has to be an absolute path. 
`output.filname` - what to call the resulting file. 

Note: based on the above, the output filepath is `$(pwd)/dist/main.js`

ref: 
- https://webpack.js.org/guides/getting-started/#using-a-configuration
- https://webpack.js.org/configuration/


Update the package.json file with the following scripts:

```shell
npm pkg set scripts.dev:start="node --watch src/server/server.js"
# dev mode is more verbose option, good for debugging
npm pkg set scripts.dev:bundler="webpack --watch --mode=development"

#  "prestart" is a reserved name, it auto-runs first when you do `npm start`
npm pkg set scripts.prestart="webpack --mode=production"
npm pkg set scripts.start="node src/server/server.js"
```

package.json now looks like:

```shell
$ cat package.json  
{
  "name": "my-app1",
  "version": "1.0.0",
  "description": "Ref - https://jscomplete.com/learn/1rd-reactful",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev:start": "node --watch src/server/server.js",
    "dev:bundler": "webpack --watch --mode=development",
    "prestart": "webpack --mode=production",
    "start": "node src/server/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "webpack": "^5.75.0"
  },
  "devDependencies": {
    "@webpack-cli/generators": "^3.0.1",
    "webpack-cli": "^5.0.1"
  }
}
```
