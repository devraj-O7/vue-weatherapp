<template>
  <div class="weather-display">
    <img v-if="data && data.weather" :src="`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`" alt="Weather Icon" class="weather-icon" />
    <div class="weather-info">
      <h2 v-if="data">{{ data.name }}</h2>
      <p v-if="data && data.weather">{{ data.weather[0].description }}</p>
      <p v-if="data && data.main">Temperature: {{ data.main.temp }}° {{ isCelsius ? 'C' : 'F' }}</p>
      <p v-if="data && data.main">Humidity: {{ data.main.humidity }}%</p>
      <p v-if="data && data.wind">Wind Speed: {{ data.wind.speed }} {{ isCelsius ? 'm/s' : 'mph' }}</p>
    </div>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  text-align: left;
  padding: 1.5em;
  width: 100%;
}

.weather-icon {
  width: 100px;
  height: auto;
  margin-right: 1em;
}

.weather-info {
  flex: 1;
  text-transform: uppercase;
}

h2 {
  color: #4CAF50;
}

p {
  color: #ddd;
}

@media (max-width: 600px) {
  .weather-display {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .weather-icon {
    margin-bottom: 1em;
  }
}
</style>
