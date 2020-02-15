<template>
  <div>
    <ul v-for="(item, index) of messages"  v-bind:key="index"  v-show="messages">
      <li>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      messages: state => state.message.messages
    })
  }
}
</script>
