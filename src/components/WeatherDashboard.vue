<template>
  <div class="weather-dashboard">
    <SearchBar @searchCity="fetchWeatherData" />
    <ToggleSwitch @toggle="toggleUnit" />
    <WeatherDisplay
      v-if="weatherData"
      :data="weatherData"
      :isCelsius="isCelsius"
    />
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import SearchBar from './SearchBar.vue'
import WeatherDisplay from './WeatherDisplay.vue'
import ToggleSwitch from './ToggleSwitch.vue'

export default {
  components: { SearchBar, WeatherDisplay, ToggleSwitch },
  setup() {
    const weatherData = ref(null)
    const isCelsius = ref(true)
    const loading = ref(false)
    const error = ref(null)

    const fetchWeatherData = async (city) => {
      loading.value = true
      error.value = null
      try {
        const apiKey = import.meta.env.VITE_API_KEY
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${isCelsius.value ? 'metric' : 'imperial'}`
        )
        weatherData.value = response.data
      } catch {
        error.value = "City not found. Please try another search."
      } finally {
        loading.value = false
      }
    }

    const toggleUnit = () => {
      isCelsius.value = !isCelsius.value
      if (weatherData.value) {
        fetchWeatherData(weatherData.value.name)
      }
    }

    return {
      weatherData,
      isCelsius,
      loading,
      error,
      fetchWeatherData,
      toggleUnit
    }
  }
}
</script>
