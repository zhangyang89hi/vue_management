

function debounce(cb, t) {
    var s = null
    return function() {
        const self = this
        const args = arguments
        s && clearTimeout(s)
        s = setTimeout(() => {
            cb.apply(self, args)
            s = null
        }, t)
        
    }
}
function thr(cb, t) {
    var time = new Date()
    return function() {
        const self = this
        const args = arguments
        if (new Date() - time > t) {
            cb.apply(self, args)
            time = new Date()
        }
    }
}
function throttle(cb, t) {
    var s = null
    return function() {
        const self = this
        const args = arguments
        if (!s) {
            cb.apply(self, args)
            s = setTimeout(() => {
                s = null
            }, t)
        }
    }
}

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, ms)
    })
}
