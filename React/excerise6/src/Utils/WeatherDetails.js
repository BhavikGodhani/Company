    import React,{ useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';

    const FetchedWeatherData = (props) => {
        const [currWeather, setCurrWeather] = useState([]);
        const [forecastWeather, setForecastWeather] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(false);
 
        const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;   //env file
        const city = props.city;

        // console.log(props.city);

        const navigate = useNavigate()

        const handleBackOnClick = () => {
            navigate('/')
        }

        useEffect(() => {
            const fetchCurrentWeather = async () => {
                try {
                    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`);
                    //  console.log(res);
                    if (!res.ok) {
                        setError(true);
                        throw new Error('Error in fetching current weather data');
                    }
                    const data = await res.json();
                    setCurrWeather(data);
                    setIsLoading(false);
                } catch (error) {
                    setIsLoading(false);
                }
            };
            fetchCurrentWeather();

        }, [weatherApiKey, city]);


        useEffect(() => {
            const fetchForecastWeather = async () => {
                try {
                    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`);
                    //   console.log(res);
                    if (!res.ok) {
                        setError(true);
                        throw new Error('Error in fetching forecast weather data');
                    }
                    const data = await res.json();
                    setForecastWeather(data);
                    setIsLoading(false);
                } catch (error) {
                    setIsLoading(false);
                }
            };
            fetchForecastWeather();
        },[weatherApiKey,city])


        if (isLoading) {
            return (
                <h1>Loading...</h1>
            )
        }
        else if (error) {
            return (
                <div>
                    <h1>Error 404 ! City not found :</h1>
                    <button onClick={handleBackOnClick}>Back</button>
                </div>
            )
        }

        const convertKelvilToCelsius = (weather)=>{
            return weather-273
        }
        //  console.log(currWeather);

        // console.log(forecastWeather);

            const finalArrOfForecastedData = forecastWeather && forecastWeather.list ? forecastWeather.list.filter((data, index) => {
                return index % 4 === 0 && index % 8 !== 0;
            }) : [];    
            
        // console.log(finalArrOfForecastedData);

        return (
            <div style={{ padding: '20px', margin: '20px 350px'}}>
                <h1>Weather Results</h1>
                <h3>City: {city}</h3>
                <div style={{ marginTop: '20px' }}>
                    <h2>Current Weather</h2>
                    <ul>
                        <li>Temperature: {convertKelvilToCelsius(currWeather.main.temp).toFixed(2)} C</li>
                        <li>Humidity: {currWeather.main.humidity} %</li>
                        <li>Wind-speed: {currWeather.wind.speed} m/s</li>
                    </ul>
                </div>
    
                <div style={{ marginTop: '20px' }}> 
                    <h2>Forecasted Data of 5 days</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {finalArrOfForecastedData.map((data, index) => (
                            <div key={index} style={{ width: "230px", padding: '10px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}>
                                <h3>Day {index + 1}</h3>
                                <ul>
                                    <li>Temperature: {convertKelvilToCelsius(data.main.temp).toFixed(2)} C</li>
                                    <li>Wind-speed: {data.wind.speed} m/s</li>
                                    <li>Humidity: {data.main.humidity} %</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
    
                <button onClick={handleBackOnClick}>Back</button>
            </div>
        );
    
    }

    export default FetchedWeatherData;
