<script>
export default {
  name: 'ProductCategySelect',
  props: ['productCategyItem'],
  template: `<md-option :value="productCategyItem.id">
    {{productCategyItem.name}}
  </md-option>`
}
</script>
