const db = require('../../data/dbConfig')

function add(project) {
    console.log(project.project_completed)
    return db('projects').insert(project)
        .then((id) => {
            let result = db('projects').where('project_id', id).first()
            console.log(result)
            let p = {
                project_id: result.project_id,
                project_name: result.project_name,
                project_description: result.project_description,
                project_completed: result.project_completed,
            }
            return p
        })
}


async function getProject() {
    const projectRows = await db('projects as p')
        .select(
            'p.project_id',
            'p.project_name',
            'p.project_completed',
            'p.project_description'
        )

    let projects = []

    for (let i = 0; i < projectRows.length; i++) {
        projects.push({
            project_id: projectRows[i].project_id,
            project_name: projectRows[i].project_name,
            project_completed: !!projectRows[i].project_completed,
            project_description: projectRows[i].project_description
        })
    }

    // console.log(projects)
    return projects
}

module.exports = { getProject, add }