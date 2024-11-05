<template>
  <div class="toggle-switch">
    <button @click="toggle">Toggle Unit</button>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['toggle'],
  props: {
    isCelsius: Boolean
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>
.toggle-switch {
  text-align: center;
  margin-bottom: 1em;
}
button {
  padding: 0.5em;
  cursor: pointer;
}
</style>
