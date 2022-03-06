import { useContext, useEffect, useState } from 'react';

import classes from './Weather.module.css'

import Card from '../../../UI/Card'
// import useHttp from '../../../utils/API'

import { ColorContext } from '../../../../store/color-context';
import useHttp from '../../../utils/API';

const Weather = () => {
    const [textColor] = useContext(ColorContext)
    const [coordinates, setWeatherData] = useState(null)

    let APIKEY = '9d7ebf8b022f99c1559d4339ab5c60ee'

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let coordinates = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }

            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    // const { isLoading, error, sendRequest:fetchWeather} = useHttp({
    //     url: `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${APIKEY}`
    // })  

    return <Card className={classes.card} style={{ backgroundColor: `${textColor}52` }}>
        <h1>weather</h1>
    </Card>
}

export default Weather