const db = require('../../data/dbConfig')

function add(task) {
    console.log(task.project_id)
    return db('tasks').insert(task)
        .then((id) => {
            return db('tasks').where('task_id', id).first()
        })
}

async function getTasks() {
    const taskRow = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        // .leftJoin('t.project_description', 'p.project_description')
        .select(
            // 't.task_id',
            't.task_description',
            // 't.task_notes',
            // 't.task_completed',
            't.project_id'
            
        )
        return taskRow
}


module.exports = { getTasks, add }