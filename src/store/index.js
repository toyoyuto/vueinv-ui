import Vue from 'vue'
import Vuex from 'vuex'

import app from './app'
import product from './product'
import message from './message'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    product,
    message
  }
})

export default store
