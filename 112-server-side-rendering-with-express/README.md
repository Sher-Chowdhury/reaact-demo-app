## my-app1 - using react-router-dom package

Official docs are a bit out of date.


## my-app2 
same as my-app1, but with all the codes a bit better organised into files and folders. 


## my-app3
This is an alternative, to using the `react-router-dom` package. Here we use `express` to catch all the requests and direct to the main top level component. 

```shell
npm start
```


Up until now, we have looked at Client-Side-Rendered (CSR) app. This is an example of server-side-rendered (SSR) app. 

In CSR, code  like `process.env` won't work, you have to use the `window` object instead - https://developer.mozilla.org/en-US/docs/Web/API/Window

Where-as SSR can use `process.env`, if actual code is run on the server side. 




