<template>
  <div>
    <div class="gird">
      <ProductSearchForm />
    </div>
    <div class="gird">
      <ProductSearchTable />
    </div>
  </div>
</template>

<script>
import ProductSearchForm from '../components/Product/ProductSearchForm.vue'
import ProductSearchTable from '../components/Product/ProductSearchTable.vue'
export default {
  name: 'ProductList',
  components: {
    ProductSearchForm,
    ProductSearchTable
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
