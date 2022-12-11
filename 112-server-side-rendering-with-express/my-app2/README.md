Ref:

Create a CSR (Client Side Rendered) site:

https://medium.com/swlh/back-to-basics-how-to-set-up-a-react-app-from-scratch-2020-134908e17490

Convert this CSR to SSR (Server Side Rendered):

https://medium.com/javascript-in-plain-english/back-to-basics-server-side-rendering-a-react-app-using-express-js-6fab99db5770


Using node version:

```shell
$ nvm use stable
$ node --version                                    
v18.10.0
```

start a new project and install packages:

```shell
mkdir my-app2
cd my-app2
npm init -y
npm install express           # nodejs webserver software  
npm install react react-dom   # these can also be installed as devDependencies
npm install webpack webpack-cli # converts all the code into a single javascript file (bundle.js). 
```


```shell
mkdir src
mkdir public
touch public/bundle.js
touch public/index.html
touch src/app.js
mkdir server
touch server/index.js

cat server/index.js
...
```

set `npm start`:

```shell
npm pkg set scripts.dev:start="node --watch server/index.js" 
npm pkg set scripts.start="node server/index.js" 
```



"react.hydrate" is what is used to do the rendering on the server side. 
