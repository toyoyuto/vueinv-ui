<template>
  <main>
    <div id="app">
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
