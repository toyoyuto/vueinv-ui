import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'
import app from './app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    app
  }
})

export default store
