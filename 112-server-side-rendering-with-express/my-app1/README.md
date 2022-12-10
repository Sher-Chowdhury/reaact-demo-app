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

module.exports = {
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


