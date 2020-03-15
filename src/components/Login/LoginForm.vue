<template>
  <div>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">VueInv</div>
          <div class="md-subhead">For a more convenient world</div>
        </md-card-header-text>
        <md-card-media md-medium>
          <img src="@/assets/logo/logo.png" alt="logo">
        </md-card-media>
      </md-card-header>
      <md-card-actions>
        <md-button v-on:click="login">Login</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$router.push('/main')
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
