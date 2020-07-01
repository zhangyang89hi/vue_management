import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        token:null,
        user:{}
    },
    getters:{

    },
    mutations:{
        set_token(state, value) {
            state.token = value;
        }
    },
    actions:{
        set_token(context,value) {
            context.commit('set_token', value)
        }
    },

})
