const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const newTask = req.body
    Task.add(newTask)
    .then(tsk => {
        res.status(201).json(tsk)
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'somthing went wrong in the task router',
        message: err.message,
        stack: err.stack
    })
})


module.exports = router