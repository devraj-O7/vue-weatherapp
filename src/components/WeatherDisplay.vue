<template>
  <div class="weather-display">
    <h2 v-if="data">{{ data.name }}</h2>
    <p v-if="data && data.weather">{{ data.weather[0].description }}</p>
    <p v-if="data && data.main">Temperature: {{ data.main.temp }}° {{ isCelsius ? 'C' : 'F' }}</p>
    <p v-if="data && data.main">Humidity: {{ data.main.humidity }}%</p>
    <p v-if="data && data.wind">Wind Speed: {{ data.wind.speed }} {{ isCelsius ? 'm/s' : 'mph' }}</p>
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
  background-color: #f0f0f0; 
  padding: 1em;
  border-radius: 5px; 
  width: 100%;
  max-width: 400px;
}
h2 {
  color: #4CAF50;
}
p {
  color: #333; 
}

@media (max-width: 600px) {
  .weather-display {
    padding: 0.5em; 
  }
}
</style>
