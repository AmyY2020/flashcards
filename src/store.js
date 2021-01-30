import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    logined: false
  },
  mutations: {
    login(state) {
      state.logined = true;
    },
    logout(state) {
      state.logined = false;
    }
  }
})

export default store;