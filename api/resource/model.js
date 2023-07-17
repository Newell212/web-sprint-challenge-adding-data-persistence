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
            'r.resource_name'
        )
        return resourceRows
}


module.exports = { add, getResource  }
