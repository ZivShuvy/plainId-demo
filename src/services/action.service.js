import { dbService } from "./db.service"
import { storageService } from "./storage.service"

export const actionService = {
    getById
}

const COLLECTION_NAME = 'actions'
const STORAGE_KEY = 'actions'

const gActions = storageService.loadFromStorage(STORAGE_KEY) || {}

async function getById(actionId) {
    if (gActions[actionId]) return Promise.resolve(gActions[actionId])
    else {
        const actions = await dbService.getCollection(COLLECTION_NAME);
        const action = actions.find(action => action.id === actionId)
        if (action) {
            gActions[actionId] = action;
            storageService.saveToStorage(STORAGE_KEY, gActions)
            return Promise.resolve(action)
        } else {
            return Promise.reject('Action not found');
        }
    }
}