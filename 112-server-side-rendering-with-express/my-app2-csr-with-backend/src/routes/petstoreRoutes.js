const express = require('express')

const app = express()

// This get basically means if this endpoint is requested, then run this javascript arrow function:
app.get('/api/v1/greetings', (req, res) => {
    res.send('hello from /api/v1/greetings endpoint')
})
