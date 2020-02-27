<template>
  <div>
    <md-table v-model="productList" md-sort="id" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <h1 class="md-title">商品一覧</h1>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="ProductCategory" md-sort-by="product_category">{{ item.product_category.name }}</md-table-cell>
        <md-table-cell md-label="WithoutTaxSellPrice" md-sort-by="without_tax_sell_price">{{ item.without_tax_sell_price }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ProductSearchTable',
  computed: {
    productList () {
      return this.$store.state.product.products
    }
  }
}
</script>
