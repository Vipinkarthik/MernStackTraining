import { useState } from 'react';

function App() {
  const [district, setDistrict] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Simulated weather data for all 33 Tamil Nadu districts
  const simulatedWeatherData = {
    'Chennai': {
      name: 'Chennai',
      weather: [{ description: 'Partly Cloudy' }],
      main: { temp: 30 },
    },
    'Coimbatore': {
      name: 'Coimbatore',
      weather: [{ description: 'Clear Sky' }],
      main: { temp: 28 },
    },
    'Madurai': {
      name: 'Madurai',
      weather: [{ description: 'Sunny' }],
      main: { temp: 32 },
    },
    'Trichy': {
      name: 'Trichy',
      weather: [{ description: 'Thunderstorms' }],
      main: { temp: 27 },
    },
    'Salem': {
      name: 'Salem',
      weather: [{ description: 'Showers' }],
      main: { temp: 26 },
    },
    'Vellore': {
      name: 'Vellore',
      weather: [{ description: 'Cloudy' }],
      main: { temp: 29 },
    },
    'Tirunelveli': {
      name: 'Tirunelveli',
      weather: [{ description: 'Heavy Rain' }],
      main: { temp: 24 },
    },
    'Dindigul': {
      name: 'Dindigul',
      weather: [{ description: 'Clear' }],
      main: { temp: 31 },
    },
    'Tiruvannamalai': {
      name: 'Tiruvannamalai',
      weather: [{ description: 'Scattered Clouds' }],
      main: { temp: 27 },
    },
    'Cuddalore': {
      name: 'Cuddalore',
      weather: [{ description: 'Windy' }],
      main: { temp: 29 },
    },
    'Nagercoil': {
      name: 'Nagercoil',
      weather: [{ description: 'Light Rain' }],
      main: { temp: 28 },
    },
    'Pudukkottai': {
      name: 'Pudukkottai',
      weather: [{ description: 'Clear Sky' }],
      main: { temp: 30 },
    },
    'Villupuram': {
      name: 'Villupuram',
      weather: [{ description: 'Partly Cloudy' }],
      main: { temp: 29 },
    },
    'Erode': {
      name: 'Erode',
      weather: [{ description: 'Cloudy' }],
      main: { temp: 27 },
    },
    'Thanjavur': {
      name: 'Thanjavur',
      weather: [{ description: 'Thunderstorms' }],
      main: { temp: 25 },
    },
    'Kanchipuram': {
      name: 'Kanchipuram',
      weather: [{ description: 'Clear Sky' }],
      main: { temp: 29 },
    },
    'Sivagangai': {
      name: 'Sivagangai',
      weather: [{ description: 'Partly Cloudy' }],
      main: { temp: 28 },
    },
    'Namakkal': {
      name: 'Namakkal',
      weather: [{ description: 'Sunny' }],
      main: { temp: 32 },
    },
    'Vikravandi': {
      name: 'Vikravandi',
      weather: [{ description: 'Heavy Rain' }],
      main: { temp: 24 },
    },
    'Ariyalur': {
      name: 'Ariyalur',
      weather: [{ description: 'Windy' }],
      main: { temp: 30 },
    },
    'Krishnagiri': {
      name: 'Krishnagiri',
      weather: [{ description: 'Scattered Clouds' }],
      main: { temp: 27 },
    },
    'Ramanathapuram': {
      name: 'Ramanathapuram',
      weather: [{ description: 'Clear Sky' }],
      main: { temp: 31 },
    },
    'Kallakurichi': {
      name: 'Kallakurichi',
      weather: [{ description: 'Showers' }],
      main: { temp: 26 },
    },
    'Tiruppur': {
      name: 'Tiruppur',
      weather: [{ description: 'Thunderstorms' }],
      main: { temp: 28 },
    },
    'Nagapattinam': {
      name: 'Nagapattinam',
      weather: [{ description: 'Partly Cloudy' }],
      main: { temp: 29 },
    },
    'Karur': {
      name: 'Karur',
      weather: [{ description: 'Clear' }],
      main: { temp: 30 },
    },
    'Thoothukudi': {
      name: 'Thoothukudi',
      weather: [{ description: 'Cloudy' }],
      main: { temp: 28 },
    },
    'Kanchipuram': {
      name: 'Kanchipuram',
      weather: [{ description: 'Clear' }],
      main: { temp: 27 },
    },
    'Vellore': {
      name: 'Vellore',
      weather: [{ description: 'Showers' }],
      main: { temp: 28 },
    },
    'Perambalur': {
      name: 'Perambalur',
      weather: [{ description: 'Thunderstorms' }],
      main: { temp: 25 },
    },
    'Tiruvarur': {
      name: 'Tiruvarur',
      weather: [{ description: 'Rain' }],
      main: { temp: 27 },
    },
    'Kanyakumari': {
      name: 'Kanyakumari',
      weather: [{ description: 'Stormy' }],
      main: { temp: 26 },
    },
    'Vedaranyam': {
      name: 'Vedaranyam',
      weather: [{ description: 'Clear Sky' }],
      main: { temp: 30 },
    },
    'Rajapalayam': {
      name: 'Rajapalayam',
      weather: [{ description: 'Light Rain' }],
      main: { temp: 28 },
    },
    'Sirkali': {
      name: 'Sirkali',
      weather: [{ description: 'Partly Cloudy' }],
      main: { temp: 29 },
    },
  };

  const fetchWeather = () => {
    setLoading(true);
    setError('');
    if (simulatedWeatherData[district]) {
      setWeatherData(simulatedWeatherData[district]);
    } else {
      setError('District not found');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-4 text-indigo-700">Weather App</h1>

        <input
          type="text"
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter District Name"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
        
        <button
          onClick={fetchWeather}
          className="w-full p-2 bg-indigo-500 text-white rounded-lg mb-4"
        >
          Get Weather
        </button>
        
        {loading && <p className="text-center text-indigo-600">Loading...</p>}
        
        {error && <p className="text-center text-red-600">{error}</p>}
        
        {weatherData && (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-indigo-600">{weatherData.name}</h2>
            <p className="text-lg text-indigo-500">{weatherData.weather[0].description}</p>
            <p className="text-2xl font-bold text-indigo-700">{weatherData.main.temp}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
