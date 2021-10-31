const db = require('../data/data.json')

export const dbService = {
    getCollection
}

function getCollection(collectionName) {
    const collection = db[collectionName];
    if (!collection) Promise.reject('Collection not found');
    return Promise.resolve(collection)
}
