import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const state = {
    user: null
}
const mutations = {
    setupUser(state, info){
        state.user = info
    },
    cleanupUser(state){
        state.user = null
    }
}

export default createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state,
    mutations
})