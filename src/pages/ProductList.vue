<template>
  <div>
    <form>
      <div>
        <label for="id">ID</label>
        <input type="number" id="id" v-model="searchForm.id">
      </div>
      <div>
        <label for="name">name</label>
        <input type="text" id="name" v-model="searchForm.name">
      </div>
      <div>
        <label for="product_cd">商品CD</label>
        <input type="text" id="product_cd" v-model="searchForm.product_cd">
      </div>
      <div>
        <label for="product_category_id">商品カテゴリ</label>
        <input type="text" id="product_category_id" v-model="searchForm.product_category_id">
      </div>
      <div>
        <label for="without_tax_sell_price">販売価格</label>
        <input type="number" id="without_tax_sell_price" v-model="searchForm.without_tax_sell_price">
      </div>
      <div>
        <button type="button" @click="searchProductList">検索</button>
        <button type="button" @click="clearSearchForm">クリア</button>
      </div>
    </form>
    <div><button type="button" v-on:click.prevent="searchProductList">取得</button></div>
    <ul v-for="item in productList" v-bind:key="item.id">
      <li>
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      searchForm: {
        id: '',
        name: '',
        product_cd: '',
        product_category_id: '',
        without_tax_sell_price: ''
      }
    }
  },
  computed: {
    productList () {
      return this.$store.state.product.products
    }
  },
  methods: {
    getProductList () {
      this.$store.dispatch('product/getProductList')
    },
    clearSearchForm () {
      this.searchForm = {
        id: '',
        name: '',
        product_cd: '',
        product_category_id: '',
        without_tax_sell_price: ''
      }
    },
    searchProductList () {
      this.$store.dispatch('product/searchProductList', this.searchForm)
    }
  },
  beforeMount () {
    this.$store.dispatch('product/getProductList')
  }
}
</script>
