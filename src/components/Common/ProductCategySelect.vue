<script>
let ProductCategyOption = {
  props: ['productCategyItem'],
  template: `<md-option :value="productCategyItem.id">
    {{productCategyItem.name}}
  </md-option>`
}
export default {
  name: 'ProductCategySelect',
  components: {
    ProductCategyOption
  },
  props: ['productCategyList', 'productCategoryId'],
  data () {
    return {
      product_category_id: this.productCategoryId
    }
  },
  watch: {
    product_category_id: function (newValue, oldValue) {
      this.$emit('onChangeProductCategy', newValue)
    }
  },
  template: `<md-field>
          <label>商品カテゴリ</label>
          <md-select v-model="product_category_id">
            <md-option value="" />
            <ProductCategyOption
            v-for="productCategyItem in productCategyList"
            :key="productCategyItem.id"
            :productCategyItem="productCategyItem"
            />
          </md-select>
        </md-field>`
}
</script>
