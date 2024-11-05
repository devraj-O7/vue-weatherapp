<template>
  <div class="search-bar">
    <input
      v-model="city"
      @input="onInput"
      @keydown.enter="searchCity"
      placeholder="Enter city name"
    />
    <ul v-if="store.suggestions.length" class="suggestions-list">
      <li
        v-for="(suggestion, index) in store.suggestions"
        :key="index"
        @click="selectCity(suggestion.name)"
      >
        {{ suggestion.name }} ({{ suggestion.country }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useWeatherStore } from '../stores/weather'

export default defineComponent({
  emits: ['searchCity'],
  setup(_, { emit }) {
    const city = ref('')
    const store = useWeatherStore()
    let debounceTimer: ReturnType<typeof setTimeout>

    const onInput = () => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(async () => {
        if (city.value) {
          await store.fetchCitySuggestions(city.value)
        } else {
          store.suggestions = []
        }
      }, 100)
    }

    const searchCity = () => {
      if (city.value.trim()) {
        emit('searchCity', city.value)
        store.suggestions = [] 
      } else {
        console.error('City name cannot be empty')
      }
    }

    const selectCity = (selectedCity: string) => {
      city.value = selectedCity
      emit('searchCity', selectedCity)
      store.suggestions = []
      store.fetchWeatherData(selectedCity)
    }

    return {
      city,
      onInput,
      searchCity,
      selectCity,
      store,
    }
  },
})
</script>

<style scoped>
.search-bar {
  position: relative;
  margin-bottom: 1em;
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
