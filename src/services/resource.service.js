import { dbService } from "./db.service"

export const resourceService = {
    query
}

const COLLECTION_NAME = 'resources'

async function query(filterBy) {
    try {
        const resources = await dbService.getCollection(COLLECTION_NAME)
        if (!filterBy) return resources;
        const regex = new RegExp(filterBy.name, 'i')
        return Promise.resolve(resources.filter(resource => regex.test(resource.name)))
    } catch (err) {
        return Promise.reject(err)
    }
}

