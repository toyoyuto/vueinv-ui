<template>
  <main>
    <div id="app">
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
  margin: 8px;
}
</style>
