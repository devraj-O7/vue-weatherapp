export interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  wind: { speed: number };
  weather: Array<{ description: string }>;
}

export interface CitySuggestion {
  name: string;
  country: string;
} 