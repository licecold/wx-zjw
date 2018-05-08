import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

import createPersistedState from 'vuex-persistedstate';

const state = {

}

const mutations = {

}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]

})