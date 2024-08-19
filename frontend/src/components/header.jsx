import React, { useState, useEffect } from "react";
import axios from "axios"

import clear from '../../public/images/clear.png'
import cloud from '../../public/images/cloud.png'
import rain from '../../public/images/rain.png'
import snow from '../../public/images/snow.png'

export default () => {

    const [location, setLocation] = useState({ city: "", country: "", temp: null, weather: "", isDay: "" })

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get("http://localhost:5000/weather");
                setLocation(response.data);
            } catch (err) {
                console.error("Erro ao buscar dados meteorológicos:", err);
            }
        }

        fetchWeather()
    }, [])

    const getWeatherIcon = (weather, isDay) => {
        if (weather == 'Clear') {
            return isDay == true ? <img src={clear} alt={weather} /> : <i class="bi bi-moon-fill text-warning fs-5 m-0"></i>
        } else if (weather == 'Clouds') {
            return isDay == true ? <img src={cloud} alt={weather} /> : <i class="bi bi-cloud-moon-fill text-secondary fs-5 m-0"></i>
        } else if (weather == 'Rain') {
            return <img src={rain} alt={weather} />
        } else if (weather == 'Snow') {
            return <img src={snow} alt={weather} />
        } 
    }

    return (
        <header>
            <div class="px-3 py-2 border-bottom mb-3">
                <div class="container d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-center gap-2">
                        <i className="bi bi-newspaper fs-2 m-0"></i>
                        <h5 className="d-none d-lg-inline m-0">NewsNow</h5>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <p className="d-lg-none m-0">{location.city} - {location.country}</p>
                        <p className="d-none d-lg-inline m-0 fs-5">{location.city} - {location.country}</p>
                        <div className="d-flex align-items-center gap-2">
                            <p className="d-lg-none m-0">{location.temp !== null ? `${location.temp}°C` : "..."}</p>
                            <p className="d-none d-lg-inline m-0 fs-5">{location.temp !== null ? `${location.temp}°C` : "..."}</p>
                            <div className="weather-icon">
                                {location.weather ? getWeatherIcon(location.weather, location.isDay) : "..."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}