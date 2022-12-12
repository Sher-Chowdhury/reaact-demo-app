const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const public_folder = path.join(__dirname, '..', 'public')


// app.use(myFunction). This function is run whenever there is incoming request. myFunction is often referred to as middleware
// We instruct express to statically serve the files in the public directory.
// https://expressjs.com/en/starter/static-files.html
app.use(express.static(public_folder))


const serverRouter = require('../src/routes/petstoreRoutes')
app.use(serverRouter)

// Another middleware to redirect all routes (e.g. http://localhost/contact) to '/'
app.use((req, res,next) =>{
    res.redirect('/')
})






app.listen(port, ()=> {
        console.log(`Server now listening on http://localhost:${port}`)
    }
)
