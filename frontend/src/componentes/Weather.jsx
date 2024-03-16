import { useState, useEffect } from "react";
import clima from '../assets/img/clima.png'

function textProcessing(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const Weather = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [locationTemperature, setLocationTemperature] = useState(null);
    const locationToken = 'ed260f3eecff4b';
    const tempToken = '09962c646b3745e989821241230211';

    useEffect(() => {
        const locAPI_URL = `https://ipinfo.io/json?token=${locationToken}`;

        const fetchData = async () => {
            try {
                const response = await fetch(locAPI_URL);
                if (response.ok) {
                    const data = await response.json();
                    setUserLocation(data);
                    let city = textProcessing(data.city);
                    // Temperature
                    const weatherAPI_URL = `http://api.weatherapi.com/v1/current.json?key=${tempToken}&q=${city}`;
                    console.log(weatherAPI_URL);

                    const weatherResponse = await fetch(weatherAPI_URL);
                    if (weatherResponse.ok) {
                        const weatherData = await weatherResponse.json();
                        setLocationTemperature(weatherData.current.temp_c);
                    } else {
                        console.error('Error getting the temperature');
                    }
                    
                } else {
                    console.error('Error requesting location');
                }
            } catch (error) {
                console.error('Error extracting data from API(S)', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="weather-container">
            {userLocation && (
                <div>
                    <h2 className="weather-heading is-size-4 has-text-weight-semibold">Ciudad: {userLocation.city}</h2>
                </div>
            )}
            {locationTemperature !== null && (
                <div>
                    <h2 className="weather-heading is-size-4 has-text-weight-semibold">Temperatura: {locationTemperature}°C</h2>
                </div>
            )
            }
            <div className="weather-image">
                <img src={clima} alt="Weather" />
            </div>

        </div>
    );
};

export default Weather;

