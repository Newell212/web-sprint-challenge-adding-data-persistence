const db = require('../../data/dbConfig')

function add(project) {
    return db('projects').insert(project)
        .then((id) => {
            return db('projects').where('project_id', id).first()
        })
}


async function getProject() {
    const projectRows = await db('projects as p')
        .select(
            'p.project_id',
            'p.project_name',
            'p.project_completed'
        )

    return projectRows
}

module.exports = { getProject, add }