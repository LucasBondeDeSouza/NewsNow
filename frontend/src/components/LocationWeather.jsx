import React, { useEffect, useState } from "react";

export default ({ darkMode }) => {
    const [location, setLocation] = useState(null)
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        fetch("https://ipwho.is/")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setLocation({ city: data.city, country: data.country_code });
                } else {
                    console.error("Erro ao obter localização:", data.message);
                }
            })
            .catch(err => {
                console.error("Erro na requisição de localização:", err);
            });
    }, []);

    return (
        <div className="d-flex items-center gap-3">
            {location && (
                <div className={`text-center mt-2 small ${darkMode ? 'text-light' : 'text-muted'}`}>
                    {location.city}, {location.country}
                </div>
            )}
        </div>
    )
}