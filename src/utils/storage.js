function getSession(key) {
    const data = window.sessionStorage.getItem(key)
    return JSON.parse(data)
}

function setSession(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
}
function removeSession(key) {
    window.sessionStorage.removeItem(key)
}

function getStorage(key) {
    const data = window.localStorage.getItem(key)
    return JSON.parse(data)
}

function setStorage(key) {
    window.localStorage.setItem(key, JSON.stringify(value))
}
function removeStorage(key) {
    window.localStorage.removeItem(key)
}


export default {
    getSession,
    setSession,
    removeSession,
    getStorage,
    setStorage,
    removeStorage
}
