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
  background-color: #333; 
  color: white; 
  padding: 2em; 
  border-radius: 10px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); 
}
p {
  color: #ddd; 
}

@media (max-width: 600px) {
  .weather-dashboard {
    padding: 1em; 
    width: 100%;
  }
}
</style>
