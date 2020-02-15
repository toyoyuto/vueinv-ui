const state = {
  messages: []
}

const mutations = {
  setMessges (state, { messages, timeout }) {
    state.messages = messages
    if (typeof timeout === 'undefined') {
      timeout = 3000
    }
    setTimeout(() => (state.messages = []), timeout)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
