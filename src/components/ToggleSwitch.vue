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
  /* margin-bottom: 1em; */
  background-color: #f0f0f0; 
  padding: 1em;
  border-radius: 5px; 
  width: 100%; 
  max-width: 200px; 
}
button {
  padding: 0.5em;
  cursor: pointer;
  background-color: #4CAF50; 
  color: white; 
  border: none; 
  border-radius: 5px;
}
button:hover {
  background-color: #45a049; 
}


@media (max-width: 600px) {
  button {
    font-size: 14px; 
  }
}
</style>
