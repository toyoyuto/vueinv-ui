<template>
  <main>
    <div id="main">
      <img src="./assets/logo.png">
      <Message />
      <router-view/>
    </div>
  </main>
</template>

<script>
import Message from './components/Message.vue'
export default {
  name: 'App',
  components: {
    Message
  },
  beforeMount () {
    // マスタ情報取得
    this.$store.dispatch('master/getMasterData')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
