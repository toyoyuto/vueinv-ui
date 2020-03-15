<template>
<div>
  <div class="md-layout md-gutter">
    <div class="md-layout-item"></div>
    <div class="md-layout-item">
      <LoginForm />
    </div>
    <div class="md-layout-item"></div>
  </div>
</div>
</template>

<script>
import LoginForm from './LoginForm.vue'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  margin-top: 100px;
}
</style>
