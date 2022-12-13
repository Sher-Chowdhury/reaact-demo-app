const express = require('express')



const router = express.Router()

router.get('/api/v1/greetings', (req, res) => {
    res.send('hello from /api/v1/greetings endpoint')
})

module.exports = router
