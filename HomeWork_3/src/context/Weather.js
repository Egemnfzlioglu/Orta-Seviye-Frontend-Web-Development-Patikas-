import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [currentCity, setCurrentCity] = useState([]);
  const [search, setSearch] = useState("");
  const [err, setErr] = useState("");

  const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const APİ_KEY = "e63aea4652bafb65d7ca84a051539e07";

  

  const fetchWeatherSearch = async (search) => {
    setLoading(true);

    const response = await fetch(
      `${BASE_URL}?q=${search || "bursa"}&appid=${APİ_KEY}&units=metric&lang=tr`
    );

    const json = await response.json().catch((error) => {
      setErr(error);
      setLoading(true);
    });

    setCurrentCity(json.city);

    setWeatherData(json.list);
    setLoading(false);
  };
  useEffect(() => {
    fetchWeatherSearch()
   
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        setLoading,
        loading,
        search,
        setSearch,
        currentCity,
        setCurrentCity,
        setErr,
        err,
        fetchWeatherSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
