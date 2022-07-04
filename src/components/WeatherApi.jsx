import { useState } from 'react';
import useReceiveApi from "../hooks/useReceiveApi";

const background1 = ["https://media2.giphy.com/media/Uodnf0BK7gSjzuwtDu/giphy.gif?cid=790b7611d584dfcd221e51f2a2cfef75dbb80a533d8634d8&rid=giphy.gif&ct=g"]

const background2 = ["https://media0.giphy.com/media/Uue8tci27Iy1RmG0MP/giphy.gif?cid=ecf05e47u42k7kgqqhj2j7r9dtnu5y74oudk6xhd8rrycg59&rid=giphy.gif&ct=g"]



const WeatherApi = () => {

    const { weather } = useReceiveApi()

    const [isCelsius, setIsCelcius] = useState(true);

    const changeTemp = () => {setIsCelcius(!isCelsius);}
    
    console.log(weather)

    document.body.style = `background-image: url(${isCelsius ? background1[0] : background2[0]});
    background-size: cover;
    height: 100%;
    padding:0;
    `
    return (
        <div className='App'>
            <div className="container" >
                <h1 className="first-title">Weather <span>App</span></h1>
                <h2 className="location">{weather.name}, {weather.sys?.country}</h2>
                <div className="container-weather" >
                    <div className="container-temp">
                        <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
                        <h2 className="temperature"> {isCelsius ? `${Math.floor(((1.8 * (weather.main?.temp - 273) + 32) - 32) / 1.8)} °Celsius ` : `${Math.floor(1.8 * (weather.main?.temp - 273) + 32)} °Fahrenheit`}</h2>
                        <small><b> min: {isCelsius ? `${Math.floor(((1.8 * (weather.main?.temp_min - 273) + 32) - 32) / 1.8)} °C` : `${Math.floor(1.8 * (weather.main?.temp_min - 273) + 32)} °F`} / max: {isCelsius ? `${Math.floor(((1.8 * (weather.main?.temp_max - 273) + 32) - 32) / 1.8)} °C ` : `${Math.floor(1.8 * (weather.main?.temp_max - 273) + 32)} °F`}</b></small>
                    </div>
                    <div className="container-info">
                        <h2 className="weather-info-title">Weather information</h2>
                        <h3 className="weatherInfo">"<div className="info-element">{weather.weather?.[0].description}</div>"</h3>
                        <h3> <i className="fa-solid fa-wind"></i> <div className="info-element"> Wind speed:</div>  {weather.wind?.speed} m/s</h3>
                        <h3> <i className="fa-solid fa-temperature-three-quarters"></i> <div className="info-element">Pressure:</div>  {weather.main?.pressure} hPa</h3>
                        <h3> <i className="fa-solid fa-droplet"></i> <div className="info-element"> Humidity:</div>  {weather.main?.humidity}%</h3>
                    </div>
                </div>
                <button onClick={changeTemp} >{isCelsius ? "Celsius to Fahrenheit" : "Fahrenheit to Celsius"}</button>
            </div>
        </div>
    );
};

export default WeatherApi;