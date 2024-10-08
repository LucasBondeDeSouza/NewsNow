import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ toggleDarkMode, darkMode }) => {
    const [location, setLocation] = useState({ city: "", country: "", temp: null, weather: "", isDay: "" });

    //const API_URL = 'http://localhost:5000';

    /*useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get("https://newsnow-server-drab.vercel.app/weather");
                setLocation(response.data);
            } catch (err) {
                console.error("Erro ao buscar dados meteorológicos:", err);
            }
        };

        fetchWeather();

        // Atualiza os dados a cada segundo
        const intervalId = setInterval(() => {
            fetchWeather();
        }, 60000);

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, []);

    const getWeatherIcon = (weather, isDay) => {
        if (weather == 'Clear') {
            return isDay ? <i className="bi bi-brightness-high-fill text-warning fs-3 m-0"></i> : <i className="bi bi-moon-fill text-warning fs-4 m-0"></i>
        } else if (weather == 'Clouds') {
            return isDay ? <i className="bi bi-cloud-sun-fill fs-3 m-0 cloud-sun"></i> : <i className="bi bi-cloud-moon-fill fs-3 m-0 cloud-moon"></i>
        } else if (weather == 'Rain') {
            return <i className="bi bi-cloud-rain-fill fs-3 m-0 rain"></i>
        } else if (weather == 'Thunderstorm') {
            return <i className="bi bi-cloud-rain-heavy-fill fs-3 m-0 thunderstorm"></i>
        } else if (weather == 'Snow') {
            return <i className="bi bi-cloud-snow-fill fs-3 m-0 snow"></i>
        }
    };*/

    return (
        <header className={`px-3 py-2 border-bottom mb-3 sticky-top ${darkMode ? "bg-dark text-light" : "bg-white"}`}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo d-flex align-items-center gap-2">
                    <i className="bi bi-newspaper fs-2 m-0"></i>
                    <h5 className="d-none d-lg-inline m-0">NewsNow</h5>
                </div>

                <div className="d-flex align-items-center gap-3">
                    {/*<p className="d-md-none m-0">{location.city} - {location.country}</p>
                    <p className="d-none d-md-inline m-0 fs-5">{location.city} - {location.country}</p>
                    <div className="d-flex align-items-center gap-2">
                        <p className="d-md-none m-0">{location.temp !== null ? `${location.temp}°C` : "..."}</p>
                        <p className="d-none d-md-inline m-0 fs-5">{location.temp !== null ? `${location.temp}°C` : "..."}</p>
                        <div className="weather-icon">
                            {location.weather ? getWeatherIcon(location.weather, location.isDay) : "..."}
                        </div>
                    </div>*/}

                    <div className="form-check form-switch m-0">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleDarkMode} />
                    </div>
                </div>
            </div>
        </header>
    );
};