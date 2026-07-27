const WeatherForecast = (props) => {
  return (
  <div className="weather">
    <h2>{props.day}</h2>
    
    <img
    src={props.img}
    alt={props.imgAlt}
    />
    
    <p>
        <span>Conditions: </span>
        {props.conditions}
      </p>

      <p>
        <span>Time: </span>
        {props.time}
      </p>
    </div>
  )
}

export default WeatherForecast