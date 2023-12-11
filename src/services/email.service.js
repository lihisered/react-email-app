import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const emailService = {
    query,
    save,
    remove,
    getById,
    createRobot: createEmail,
}

const STORAGE_KEY = 'emails'

_createEmails()

async function query(filterBy) {
    const emails = await storageService.query(STORAGE_KEY)
    // if (filterBy) {
    //     var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
    //     maxBatteryStatus = maxBatteryStatus || Infinity
    //     minBatteryStatus = minBatteryStatus || 0
    //     emails = emails.filter(robot => robot.type.toLowerCase().includes(type.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
    //         && (robot.batteryStatus < maxBatteryStatus)
    //         && robot.batteryStatus > minBatteryStatus)
    // }
    return emails
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(emailToSave) {
    if (emailToSave.id) {
        return storageService.put(STORAGE_KEY, emailToSave)
    } else {
        emailToSave.isOn = false
        return storageService.post(STORAGE_KEY, emailToSave)
    }
}

function createEmail(subject, body, from, to) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        removedAt: null,
        from,
        to
    }
}

function _createEmails() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)
    if (!emails || !emails.length) {
        emails = [
            createEmail('First email', 'Stam', 'lihi@sered.com', 'shocko@mocko.com'),
            createEmail('Second email', 'Lolo', 'lihi@sered.com', 'shocko@mocko.com'),
            // createEmail('Test', 'Just a test... Just a test... Just a test... Just a test... Just a test... Just a test... Just a test... Just a test... Just a test... Just a test... Just a test... Just a test... Just a test... Just a test... Just a test...', 'shocko@mocko.com', 'lihi@sered.com'),
            createEmail('Testush', '🍇', 'shocko@mocko.com', 'lihi@sered.com'),
        ]
        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}




