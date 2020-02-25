<template>
  <div>
    <div class="gird">
      <ProductSearchForm />
    </div>
    <div class="gird">
      <div>
        <md-table v-model="productList" md-card>
          <md-table-toolbar>
            <h1 class="md-title">商品一覧</h1>
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSearchForm from '../components/Product/ProductSearchForm.vue'
export default {
  name: 'ProductList',
  components: {
    ProductSearchForm
  },
  data () {
    return {
    }
  },
  computed: {
    productList () {
      return this.$store.state.product.products
    }
  },
  methods: {
  }
}
</script>
<style>
.gird {
  margin: 8px;
}
</style>
