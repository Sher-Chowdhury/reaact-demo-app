## my-app1 - using react-router-dom package

Official docs are a bit out of date.


## my-app2 
same as my-app1, but with all the codes a bit better organised into files and folders. 


## my-app3
Here we used a technology called "Handlebars". Handlebars is a templating engine, that renders html syntax from .hbs files. 
Handlebars is an alternative to using React (and the `react-router-dom` package).  


Here we use `express` to catch all the requests and direct to the main top level component. We also configure `express` to use handlebars. 

```shell
npm start
```


Up until now, we have looked at Client-Side-Rendered (CSR) app. This is an example of server-side-rendered (SSR) app. 

In CSR, code  like `process.env` won't work, you have to use the `window` object instead - https://developer.mozilla.org/en-US/docs/Web/API/Window

Where-as SSR can use `process.env`, if actual code is run on the server side. 


React can also do Server Side Rendered (SSR), in fact with React, you create an React app that's:

- Client-Side-Rendered (CSR) only
- Server-Side-Rendered (SSR) only
- A combination of both, CSR and SSR - this gives the best of both worlds. 

CSR can be slow for rendering the first page. So you can set up the first to render using ssr (including doing the initial data fetch), this will allow loading
the csr's bundle.js to load in the background in the meantime. Then CSR can take over from that point onwards, where necessary. 
