import axios from 'axios'

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
      url: param.url,
      data: param.body,
      method: param.method,
      // クロスオリジンを行う設定
      mode: 'cors'
    }
    if (param.method === 'GET') {
      delete requestInfo.data
    }
    axios(requestInfo)
      .then((response) => {
        console.log('success')
        context.dispatch(param.actions.success, response.data, { root: true })
      })
      .catch((error) => {
        console.log('error')
        // エラーメッセージの格納
        context.commit('message/setMessges', error.response.data, { root: true })
        console.log(error.response.data)
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
