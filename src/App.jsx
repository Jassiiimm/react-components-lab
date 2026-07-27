import "./App.css"
import WeatherForecast from "./components/WeatherForecast"

const weatherForecasts = [
  {
    day: "Mon",
    img: "src/assets/day.svg",
    imgAlt: "sun icon",
    conditions: "sunny",
    time: "Morning",
  },
  {
    day: "Tue",
    img: "src/assets/night.svg",
    imgAlt: "moon icon",
    conditions: "clear",
    time: "Night",
  },
  {
    day: "Wed",
    img: "src/assets/stormy.svg",
    imgAlt: "clouds with lightning icon",
    conditions: "stormy",
    time: "All Day",
  },
  {
    day: "Thu",
    img: "src/assets/cloudy-day.svg",
    imgAlt: "sun overcast by clouds icon",
    conditions: "overcast",
    time: "Evening",
  },
  {
    day: "Fri",
    img: "src/assets/cloudy-night.svg",
    imgAlt: "moon overcast by clouds icon",
    conditions: "cloudy",
    time: "Night",
  },
]

const App = () => {
  return (
    <>
    <h1>Local Weather</h1>
    
    <section className="weather-list">
      {weatherForecasts.map((forecast) => (
        <WeatherForecast {...forecast} key={forecast.day} />
        ))}
        </section>
        </>
  )
}

export default App