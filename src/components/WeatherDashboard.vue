<template>
  <div class="weather-dashboard">
    <SearchBar @searchCity="weatherStore.fetchWeatherData" />
    <ToggleSwitch @toggle="weatherStore.toggleUnit" />
    <WeatherDisplay
      v-if="weatherStore.weatherData"
      :data="weatherStore.weatherData"
      :isCelsius="weatherStore.isCelsius"
    />
    <p v-if="weatherStore.error">{{ weatherStore.error }}</p>
    <p v-if="weatherStore.loading">Loading...</p>
  </div>
</template>

<script lang="ts">
import { useWeatherStore } from '../stores/weather'; 
import SearchBar from './SearchBar.vue';
import WeatherDisplay from './WeatherDisplay.vue';
import ToggleSwitch from './ToggleSwitch.vue';

export default {
  components: { SearchBar, WeatherDisplay, ToggleSwitch },
  setup() {
    const weatherStore = useWeatherStore(); 

    return {
      weatherStore,
    };
  },
};
</script>

<style scoped>
.weather-dashboard {
  background-color: #f0f0f0; 
  padding: 1em;
  border-radius: 5px; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
}
p {
  color: #333; 
}

@media (max-width: 600px) {
  .weather-dashboard {
    padding: 0.5em; 
  }
}
</style>
