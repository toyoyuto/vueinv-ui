<template>
<div>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
        <md-content>
          <h1>Shopping</h1>
        </md-content>
    </div>
    <div class="md-layout-item">
        <md-content>
          <h1 v-on:click="products">ProductSearch</h1>
        </md-content>
    </div>
  </div>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
        <md-content>
          <h1>ProductRegister</h1>
        </md-content>
    </div>
    <div class="md-layout-item">
        <md-content>
          <h1>ReceiptIssue</h1>
        </md-content>
    </div>
  </div>
</div>
</template>

<script>
import LoginForm from './LoginForm.vue'
export default {
  name: 'Main',
  components: {
    LoginForm
  },
  data () {
    return {
    }
  },
  methods: {
    products () {
      this.$router.push('/products')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-content {
    width: 490px;
    height: 380px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    position: relative;
    margin: 2px 0;
    border: solid 2px #FFC107;
  }
</style>
