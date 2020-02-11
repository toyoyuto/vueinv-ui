<template>
  <div>
    <div><button type="button" v-on:click.prevent="getProductList">取得</button></div>
    <ul v-for="item in productList" v-bind:key="item.id">
      {{item.name}}
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  computed: {
    productList () {
      return this.$store.state.product.products
    }
  },
  methods: {
    getProductList () {
      // this.$axios.get('/api/products').then((response) => {
      //   console.log('response.data')
      //   console.log(response.data)
      //   return response.data
      // })
      this.$store.dispatch('product/getProductList')
    }
  },
  beforeMount () {
    this.$emit('getProductList')
  }
}
</script>
