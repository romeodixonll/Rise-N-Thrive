import { useContext, useEffect, useState } from 'react';

import classes from './Weather.module.css'

import Card from '../../../UI/Card'
// import useHttp from '../../../utils/API'

import { ColorContext } from '../../../../store/color-context';
import useHttp from '../../../utils/API';

const Weather = () => {
    const [textColor, , theme] = useContext(ColorContext);
    const [latitude, setLatitude] = useState(30.4447488);
    const [longitude, setLongitude] = useState(-97.7338368);
    const [weatherData, setWeatherData] = useState({ current: null, high: null, low: null, feelsLike: null, windSpeed: null, weatherImage: null })

    let APIKEY = '9d7ebf8b022f99c1559d4339ab5c60ee'

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    const transformData = (data) => {
        setWeatherData({
            current: data.main.temp,
            high: data.main.temp_max,
            low: data.main.temp_min,
            feelsLike: data.main.feels_like,
            windSpeed: data.wind.speed,
            weatherImage: data.weather[0].icon,
        })
    }

    const { isLoading, error, sendRequest: fetchWeather } = useHttp({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKEY}`
    }, transformData)

    useEffect(() => {
        getLocation()
        fetchWeather()
    }, [])

    return <Card className={classes.card}
        style={theme === "#393939"
            ? { backgroundColor: `${textColor}52`, color: 'white' }
            : { backgroundColor: `${textColor}99`, color: 'black' }}>
        <div>
            <h2>Weather</h2>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weatherImage}.png`} />
        </div>
        <h3>{`Current: ${weatherData.current}`}</h3>
        <h3>{`High: ${weatherData.high}`}</h3>
        <h3>{`Low: ${weatherData.low}`}</h3>
        <h3>{`Feels Like: ${weatherData.feelsLike}`}</h3>
        <h3>{`Wind Speed: ${weatherData.windSpeed}`}</h3>
    </Card>
}

export default Weather