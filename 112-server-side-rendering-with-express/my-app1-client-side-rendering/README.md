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

start a new project and install packages:

```shell
mkdir my-app2
cd my-app2
npm init -y
npm install express           # nodejs webserver software  
npm install react react-dom   # these can also be installed as devDependencies
npm install webpack webpack-cli # converts all the code into a single javascript file (bundle.js). 
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react # babel is used for converting jsx syntax to stadnard json
```


```shell
mkdir src
mkdir public
touch public/bundle.js
touch public/index.html
touch src/app.js
mkdir server
touch server/index.js

touch babel.config.js
touch webpack.config.js
```

set `npm start` and `npm run dev:start`:

```shell
npm pkg set scripts.dev:start="node --watch server/index.js" 
npm pkg set scripts.start="node server/index.js" 
```



"react.hydrate" is what is used to do the rendering on the server side. 
