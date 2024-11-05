<template>
  <div class="weather-display">
    <h2>{{ data.name }}</h2>
    <p>{{ data.weather[0].description }}</p>
    <p>Temperature: {{ data.main.temp }}° {{ isCelsius ? 'C' : 'F' }}</p>
    <p>Humidity: {{ data.main.humidity }}%</p>
    <p>Wind Speed: {{ data.wind.speed }} {{ isCelsius ? 'm/s' : 'mph' }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    data: Object,
    isCelsius: Boolean
  }
}
</script>

<style scoped>
.weather-display {
  text-align: center;
}
</style>
