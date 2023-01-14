## my-app1


ref - https://reactjs.org/docs/create-a-new-react-app.html#create-react-app

https://www.npmjs.com/package/create-react-app

There's 2 ways:

```
npm -i -g create-react-app
create-react-app 01-my-hello-world-app
```

Other alternatives can be found here - https://www.javascriptstuff.com/react-starter-projects/ (this is quite out of date)

but a better approach is:

```
nvm use stable
npx create-react-app my-app
cd my-app
npm start
```

`npx` just downloads the latest `create-react-app` [binary](https://www.npmjs.com/package/create-react-app) and uses it. 
npx always gets the latest version. So you don't have to worry about getting the latest version. I think if the `node_modules`
folder exists in the current working directory, and this folder contains this binary, then it will use that instead. 


note: the "x" in `npm` means "execute", i.e. we want to execute a node package.






Here's what the output looks like:

```
$ npx create-react-app my-app


Creating a new React app in /Users/sher/github/react_study_guide/001-create-react-app/my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1393 packages in 1m

212 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 57 packages in 8s

212 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package in 3s

212 packages are looking for funding
  run `npm fund` for details

Success! Created my-app at /Users/sher/github/react_study_guide/001-create-react-app/my-app
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

  cd my-app
  npm start

Happy hacking!
```

And here's what the boilerplate code's tree looks like

```
$ tree my-app -I node_modules
my-app
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
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

you can now use `npm start` to see what the demo looks like. 

`my-app/public/src/index.html` contains a div with the id "root". This is the starting point - https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom


## my-app2

The `create-react-app` comes with a lot of baggage which makes it harder to understand the inner workings of a react app. 

That's why it's better to create a react app from scratch, so to better understand all the moving parts. 

Here's the article I followed to create a very basic react app - https://medium.com/swlh/back-to-basics-how-to-set-up-a-react-app-from-scratch-2020-134908e17490

## my-app3

This is a more fuller example, ignore this for now. come back to it later. 
