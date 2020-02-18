import Vue from 'vue'
import Vuex from 'vuex'

import app from './app'
import product from './product'
import message from './message'
import master from './master'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    master,
    product,
    message
  }
})

export default store
