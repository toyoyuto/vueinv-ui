// 初期化のしやすいように加工
const getDefaultState = () => {
  return {
    products: []
  }
}

// initial state
const state = getDefaultState()

const mutations = {
  setProducts (state, products) {
    state.products = products
  }
}

const actions = {
  // 商品詳細
  getProductList (context) {
    const requestInfo = {
      method: 'GET',
      url: '/api/products',
      actions: {
        success: 'product/successGetProductList',
        failure: 'product/failureGetProductList'
      }
    }
    context.dispatch('app/appAxios', requestInfo, { root: true })
  },
  // 商品検索
  searchProductList (context, param) {
    const requestParam = param
    const requestInfo = {
      method: 'POST',
      url: '/api/products/search',
      body: requestParam,
      actions: {
        success: 'product/successGetProductList',
        failure: 'product/failureGetProductList'
      }
    }
    context.dispatch('app/appAxios', requestInfo, { root: true })
  },
  successGetProductList (context, param) {
    context.commit('setProducts', param.products)
  },
  failureGetProductList (context) {
    context.commit('setProducts', [])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
