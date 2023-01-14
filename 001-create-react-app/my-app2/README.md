ref - https://medium.com/swlh/back-to-basics-how-to-set-up-a-react-app-from-scratch-2020-134908e17490

The main packages are:

- webpack - compiles all the javascript code, into a single file, which in this example is called "bundle.js
- babel - converts any jsx syntax embeded inside *.js files into standard javascript code. 
- express - in this example, we're only using express to serve a static html page, along with the html file's dependencies, 
            in particular the bundle.js file.

In this example, nnce that express app delivered teh initial html file + bundle.js, it plays no further part, i.e. all future
page loads and handled by the bundle.js file on the client side, hence this app is an example of a client-side-rendered (csr) app. 



IGNORE THE REST OF THIS PAGE FOR NOW:


Ref:

Create a CSR (Client Side Rendered) site:

https://medium.com/swlh/back-to-basics-how-to-set-up-a-react-app-from-scratch-2020-134908e17490 (covered in my-app1)

In csr, all the react code is packaged into a bundle.js file. all the bundle.js code is executed on the browser (i.e. csr) 


Convert this CSR to SSR (Server Side Rendered):

https://medium.com/javascript-in-plain-english/back-to-basics-server-side-rendering-a-react-app-using-express-js-6fab99db5770 (covered in my-app2)


Using node version:

```shell
$ nvm use stable
$ node --version                                    
v18.11.0
```

start a new project:

```shell
mkdir my-app
cd my-app
npm init -y
```

install packages:

```shell
npm install express           # nodejs webserver software  
npm install react react-dom   # these can also be installed as devDependencies
npm install webpack webpack-cli # converts all the code into a single javascript file (bundle.js). 
```

Install Babel, this converts code jsx syntax (that are in *.jsx files) to javascript code:

```
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react 
```

```shell
mkdir public
touch public/index.html
```

`cat public/index.html` gives:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Express React Webpack Babel Setup</title>
</head>
<body>
Hello From Index
<div id="app"></div>
<script src="./bundle.js"></script>
</body>
</html>
```

The content for the div tag with the id `app` will be rendered by the javascript code stored in the `bundle.js` file. 

We will be using `webpack` to generate the bundle.js file. Since our code will contain jsx syntax, we'll instruct webpack to 
first used `babel` to convert jsx code into standard javascript code. 


```shell
mkdir src
mkdir src/components
touch src/components/index.js
```

`cat src/components/index.js` gives: 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
const title = 'My Simple Express React Webpack Babel Setup Environment';
ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);
```



```shell
mkdir server
touch server/index.js
```

`cat server/index.js` gives:

```javascript
const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const public_folder = path.join(__dirname, '..', 'public')


// app.use(myFunction). This function is run whenever there is incoming request. myFunction is often referred to as middleware
// We instruct express to statically serve the files in the public directory.
// https://expressjs.com/en/starter/static-files.html
app.use(express.static(public_folder))


// Another middleware to redirect all routes (e.g. http://localhost/contact) to '/'
app.use((req, res,next) =>{
    res.redirect('/')
})

app.listen(port, ()=> {
        console.log(`Server now listening on http://localhost:${port}`)
    }
)
```

Our express app simple servers up a static website only, since we're using `express.static()` middleware. In our case it simply sends the `index.html`
along with it's dependencies (which in this example is just the bundle.js) to the browser. 


Create the following files:
```
touch babel.config.js
touch webpack.config.js
```

`cat babel.config.js` gives:

```javascript
module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
};
```

[Babel](https://babeljs.io/) is general purpose syntax transformer, of which react's jsx is one of a number of different types of 
syntax that babel can convert to standard javascript.

So you have to tell babel which syntax types it needs to transform by setting the presets setting. Here we added a list of syntax types:

- `@babel/preset-env` - modern javascript (as opposed to the really old 2015 javascript standard)
- `@babel/preset-react` - react code, i.e. jsx syntax.


`cat webpack.config.js` gives:

```javascript
const path = require("path");
module.exports = {
    entry: './src/components/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
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
`output` - let you choose where to store the resulting output. You can also configure multiple entries+outputs - https://webpack.js.org/concepts/output/
`output.path` - directory to store the resulting output js file. This has to be an absolute path.
`output.filname` - what to call the resulting file.

Note: based on the above, the output filepath is `$(pwd)/public/bundle.js`

ref:
- https://webpack.js.org/guides/getting-started/#using-a-configuration
- https://webpack.js.org/configuration/


set `npm start` and `npm run dev:start`:

```shell
npm pkg set scripts.dev:bundler="webpack --mode=development"
npm pkg set scripts.prod:bundler="webpack --mode=production"
```
webpack's `development` mode is better for debugging, e.g. it give more verbose info. 




```shell
npm pkg set scripts.dev:start="node --watch server/index.js" 
npm pkg set scripts.start="node server/index.js" 
```

To generate the `bundle.js` we do:

```shell
npm run dev:bundler
```

To start our app, we do, one of:

```shell
npm start
npm run dev:start
```


