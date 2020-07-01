import alert from './alert.vue'

const myAlert = {
    vm: null, //
    queue: [],
}

myAlert.install = function(Vue, options) {
    Vue.prototype.$myAlert = function(opt={}) {
        let defaultOpt = {
            title: '提示',
            content: '系统繁忙，请稍后再试',
            btnTxt: '好的',
            width: 300,
            cb: null
        }
        opt = {...defaultOpt, ...options, ...opt}

        let MyAlerts = Vue.extend(alert)
        let vm = new MyAlerts().$mount()
        document.body.appendChild(vm.$el)
        this.vm = vm
        Object.assign(vm, opt)
        // if (this.vm) {
        //     this.queue.push(opt);
        //     return;
        // }

        vm.show = true
        vm.$on('close', () => {
            document.body.removeChild(vm.$el)
            vm.$destroy()
            this.vm = null
        })
    }
    console.log('myAlert is install')
}


export default myAlert