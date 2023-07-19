const db = require('../../data/dbConfig')

function add(resource) {
    return db('resources').insert(resource)
        .then((id) => {
            return db('resources').where('resource_id', id).first()
        })
}

async function getResource() {
    const resourceRows = await db('resources as r')
        .select(
            'r.resource_id',
            'r.resource_name',
            'r.resource_description'
        )
       const resources = [
        { resource_name: resourceRows[0].resource_name},
       { resource_id: resourceRows[0].resource_id},
       
       ]
       return resources
}


module.exports = { add, getResource  }
