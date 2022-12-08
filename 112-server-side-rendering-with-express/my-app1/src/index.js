const express = require('express')

const expressHandlebars = require('express-handlebars')
const path = require('path')


let http = require('http');
const app = express()

let server

server = http.createServer({}, app)

uiRoot = './src/uiBuild'
app.set('views', [uiRoot])


const handlebars = expressHandlebars.create({ extname: '.html' })
app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs')




// main react component
// function App(props) {
//
//     return (
//         <h1>Hello world -  {props.endpoint}</h1>
//     );
// }

// function router(endpointRequested){
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//
//     root.render(
//         <React.StrictMode>
//             <App endpoint=endpointRequested />
//         </React.StrictMode>
//     );
// }

const renderIndex = (req, res) => {
    console.log(req)
    // res.send('Hello World!')
    res.render('index', { layout: false })
}
// code to exract endpoint
// requestedEndpoint = req.notSureAboutThisBit

app.get([
        '/',
        '/home',
        '/about/*',
        '/about/careers',
        '/about/careers/*',
        '/contact'],
    renderIndex
)

server.listen(8300, '0.0.0.0')
