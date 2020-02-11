const domin = 'http://localhost:8000'
const axios = require('axios')
axios.defaults.baseURL = domin

// 初期化のしやすいように加工
const getDefaultState = () => {
  return {
    messages: []
  }
}

// initial state
const state = getDefaultState()

const mutations = {
  setMessages (state, messages) {
    state.products = messages.message
  }
}

const actions = {
  appAxios (context, param) {
    const requestInfo = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      url: domin + param.url,
      params: param.body,
      method: param.method,
      // クロスオリジンを行う設定
      mode: 'cors'
    }
    if (param.method === 'GET') {
      delete requestInfo.params
    }
    axios(requestInfo)
      .then((response) => {
        console.log('success')
        context.dispatch(param.actions.success, response.data, { root: true })
      })
      .catch((error) => {
        console.log('error')
        // エラーメッセージの格納
        context.commit('setMessages', error.response.data)
        context.dispatch(param.actions.failure, null, { root: true })
      })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
