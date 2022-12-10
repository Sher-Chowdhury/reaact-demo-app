Ref - https://jscomplete.com/learn/1rd-reactful

Using node version:

```shell
$ nvm use stable
$ node --version                                    
v18.10.0
```

start a new project and install packages:

```shell
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

