<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="ID:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="searchForm.id"
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="商品名:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="searchForm.name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="商品CD:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="searchForm.product_cd"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="商品カテゴリ:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="searchForm.product_category_id"
          :options="selectProductCategyList"
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-5" label="販売価格" label-for="input-5">
        <b-form-input
          id="input-5-1"
          v-model="searchForm.without_tax_sell_price_first"
        ></b-form-input>
        ~
        <b-form-input
          id="input-5-2"
          v-model="searchForm.without_tax_sell_price_las"
        ></b-form-input>
      </b-form-group>

      <b-button type="button" v-on:click="searchProductList" variant="primary">Search</b-button>
      <b-button type="button" v-on:click="clearSearchForm" variant="danger">Reset</b-button>
    </b-form>
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
        product_category_id: null,
        without_tax_sell_price_first: '',
        without_tax_sell_price_last: ''
      }
    }
  },
  computed: {
    productList () {
      return this.$store.state.product.products
    },
    productCategyList () {
      return this.$store.state.master.productCategies
    },
    selectProductCategyList () {
      // select用に加工
      const productCategies = this.productCategyList.map(item => {
        return { value: item.id, text: item.name }
      })
      const selectList = [{ value: null, text: 'No select' }].concat(productCategies)
      return selectList
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
  }
}
</script>
