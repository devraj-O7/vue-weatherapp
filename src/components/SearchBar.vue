<template>
  <div class="search-bar">
    <input
      v-model="city"
      @input="onInput"
      @keydown.enter="selectCity(city)"
      placeholder="Enter city name"
    />
    <ul v-if="suggestions.length" class="suggestions-list">
      <li v-for="(suggestion, index) in suggestions" :key="index" @click="selectCity(suggestion.name)">
        {{ suggestion.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'

export default {
  emits: ['searchCity'],
  setup(_, { emit }) {
    const city = ref('')
    const suggestions = ref([])

    let debounceTimer
    const fetchSuggestions = async (query) => {
      if (!query) {
        suggestions.value = []
        return
      }
      try {
        const apiKey = import.meta.env.VITE_API_KEY
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`)
        suggestions.value = response.data.map((item) => ({ name: item.name, country: item.country }))
      } catch (error) {
        console.error("Error fetching city suggestions:", error)
      }
    }

    const onInput = () => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => fetchSuggestions(city.value), 300)
    }

    const selectCity = (selectedCity) => {
      city.value = selectedCity
      suggestions.value = []
      emit('searchCity', selectedCity)
    }

    return {
      city,
      suggestions,
      onInput,
      selectCity
    }
  }
}
</script>

<style scoped>
.search-bar {
  position: relative;
  padding-bottom: 2rem;
}
input {
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
}
.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 10;
}
.suggestions-list li {
  padding: 0.5em;
  cursor: pointer;
}
.suggestions-list li:hover {
  background: #f0f0f0;
}
</style>
