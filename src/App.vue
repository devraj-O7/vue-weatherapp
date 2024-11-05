<template>
  <div id="app">
    <h1>Weather Dashboard</h1>
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
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
.weather-dashboard {
  max-width: 600px;
  margin: auto;
}

@media (max-width: 600px) {
  .weather-dashboard {
    padding: 1em;
  }
}

</style>
