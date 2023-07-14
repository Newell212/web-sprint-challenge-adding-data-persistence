const router = require('express').Router()
const Task = require('./model')

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'somthing went wrong in the task router',
        message: err.message,
        stack: err.stack
    })
})


module.exports = router