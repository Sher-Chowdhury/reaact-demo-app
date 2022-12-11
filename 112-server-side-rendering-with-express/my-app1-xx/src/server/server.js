const express = require("express")
let  app = express()
app.get('/', (req, res) => res.send("HELLO FROM EXPRESS"));
app.use(express.static('dist'))
app.listen(3000,  () => console.log("Example app listening on port 3000!"));
