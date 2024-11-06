<template>
  <div id="app">
    <h1>Weather App</h1>
    <WeatherDashboard />
  </div>
</template>

<script lang="ts">
import WeatherDashboard from './components/WeatherDashboard.vue'

export default {
  name: 'App',
  components: {
    WeatherDashboard
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  background-color: #222;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  color: #4CAF50;
  margin-bottom: 20px;
  text-transform: uppercase;
}
</style>
