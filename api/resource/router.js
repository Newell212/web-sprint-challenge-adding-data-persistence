const router = require('express').Router()
const Resource = require('./model')

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in the resources router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router
