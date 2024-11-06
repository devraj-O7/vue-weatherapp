import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { WeatherData, CitySuggestion } from '../types/global'

export const useWeatherStore = defineStore('weather', () => {
  const weatherData = ref<WeatherData | null>(null)
  const suggestions = ref<CitySuggestion[]>([])
  const isCelsius = ref(true)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchWeatherData = async (city: string) => {
    loading.value = true
    weatherData.value=null;
    error.value = null
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const unit = isCelsius.value ? 'metric' : 'imperial'
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      )
      weatherData.value = response.data
    } catch {
      error.value = 'City not found. Please try another search.'
    } finally {
      loading.value = false
    }
  }

  const fetchCitySuggestions = async (query: string) => {
    if (!query) {
      suggestions.value = []
      return
    }
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
      )
      suggestions.value = response.data.map((item: { name: string; country: string }) => ({
        name: item.name,
        country: item.country,
      }))
    } catch (error) {
      console.error("Error fetching city suggestions:", error)
      suggestions.value = []
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
    suggestions,
    isCelsius,
    loading,
    error,
    fetchWeatherData,
    fetchCitySuggestions,
    toggleUnit,
  }
})
