## my-app1 - using react-router-dom package

Official docs are a bit out of date.


## my-app2 
same as my-app1, but with all the codes a bit better organised into files and folders. 


## my-app3
This is an alternative, to using the `react-router-dom` package. Here we use `express` to catch all the requests and direct to the main top level component. 

Haven't got this my-app demo working yet. 

```javascript

const express = require('express')

const app = express()

let server

server = http.createServer({}, app)

// main react componentn
function App(props) {

    return (
        <h1>"Hello world - " {props.endpoint}</h1>
    );
}

function router(endpointRequested){
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App endpoint=endpointRequested />
        </React.StrictMode>
    );
}

const renderIndex = (req, res) => {

}
  // code to exract endpoint
  requestedEndpoint = req.notSureAboutThisBit

  app.get([
    '/',
    '/home',
    '/about/*', 
    '/about/careers',
    '/about/careers/*',
    '/contact'],
    router(requestedEndpoint)
  )

  server.listen(8300, '0.0.0.0')


```
