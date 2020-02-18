// 初期化のしやすいように加工
const getDefaultState = () => {
  return {
    products: [],
    productCategies: []
  }
}

// initial state
const state = getDefaultState()

const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  setProductCategies (state, productCategories) {
    state.productCategies = productCategories
  }
}

const actions = {
  // マスタデータ取得
  getMasterData (context) {
    context.dispatch('getProductList')
    context.dispatch('getProductCategoryList')
  },
  // 商品一覧
  getProductList (context) {
    const requestInfo = {
      method: 'GET',
      url: '/api/products',
      actions: {
        success: 'master/successGetProductList',
        failure: 'master/failureGetProductList'
      }
    }
    context.dispatch('app/appAxios', requestInfo, { root: true })
  },
  // 商品カテゴリ一覧
  getProductCategoryList (context) {
    const requestInfo = {
      method: 'GET',
      url: '/api/product_categories',
      actions: {
        success: 'master/successGetProductCategoryList',
        failure: 'master/failureGetProductCategoryList'
      }
    }
    context.dispatch('app/appAxios', requestInfo, { root: true })
  },
  successGetProductList (context, param) {
    context.commit('setProducts', param.products)
  },
  failureGetProductList (context) {
    context.commit('setProducts', [])
  },
  successGetProductCategoryList (context, param) {
    context.commit('setProductCategies', param.productCategorys)
  },
  failureGetProductCategoryList (context) {
    context.commit('setProductCategies', [])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
