<template>
  <div>
    <div>
      <div class="md-layout-item md-size-20">
        <md-field>
          <label>ID</label>
          <md-input v-model="searchForm.id" type="number"></md-input>
        </md-field>
      </div>
    </div>
    <div>
      <div class="md-layout-item md-size-40">
        <md-field>
          <label>商品名</label>
          <md-input v-model="searchForm.name"></md-input>
        </md-field>
     </div>
    </div>
    <div>
      <div class="md-layout-item md-size-40">
        <md-field>
          <label>商品CD</label>
          <md-input v-model="searchForm.product_cd"></md-input>
        </md-field>
     </div>
    </div>
    <div>
      <div class="md-layout-item md-size-40">
        <ProductCategySelect
        :productCategoryId="searchForm.product_category_id"
        :productCategyList="productCategyList"
        @onChangeProductCategy="onChangeProductCategy"
        />
      </div>
    </div>
    <div>
      <div class="md-layout-item md-size-40">
        <md-field>
          <label>販売価格(From)</label>
          <md-input v-model="searchForm.without_tax_sell_price_first"></md-input>
        </md-field>
      </div>
    </div>
    <div>
      <div class="md-layout-item md-size-40">
        <md-field>
          <label>販売価格(To)</label>
          <md-input v-model="searchForm.without_tax_sell_price_last"></md-input>
        </md-field>
      </div>
    </div>
    <div>
      <div class="md-layout-item md-size-40">
        <md-button class="md-raised" v-on:click="clearSearchForm">Reset</md-button>
        <md-button class="md-raised md-primary" v-on:click="searchProductList">Search</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCategySelect from '../Common/ProductCategySelect.vue'

export default {
  name: 'ProductSearchForm',
  components: {
    ProductCategySelect
  },
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
    onChangeProductCategy (value) {
      this.searchForm = {
        product_category_id: value
      }
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
