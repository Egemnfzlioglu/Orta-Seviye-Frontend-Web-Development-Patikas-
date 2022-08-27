import "./App.css";
import { useContext } from "react";
import { WeatherContext } from "./context/Weather";

import Loading from "./components/Loading/Loading";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";

function App() {
  const {
    weatherData,
    loading,
    search,
    setSearch,
    currentCity,
    setCurrentCity,
    setErr,
    err,
    setLoading,
    fetchWeatherSearch,
  } = useContext(WeatherContext);

  return (
    <>
      <>
        <Header />
        <Search
          search={search}
          setSearch={setSearch}
          currentCity={currentCity}
          setCurrentCity={setCurrentCity}
          setErr={setErr}
          loading={loading}
          setLoading={setLoading}
          fetchWeatherSearch={fetchWeatherSearch}
          err={err}
        />
      </>
      {loading ? (
        <Loading setLoading={setLoading} err={err} />

      ) : (
        <Body weatherData={weatherData} err={err} />
      )}
    </>





  );
}

export default App;





{/*

     <Header />
      {(
        <>
          <Search
            search={search}
            setSearch={setSearch}
            currentCity={currentCity}
            setCurrentCity={setCurrentCity}
            setErr={setErr}
            loading={loading}
            setLoading={setLoading}
            fetchWeatherSearch={fetchWeatherSearch}
            err={err}

          />
          <Body weatherData={weatherData} err={err} />
        </>)

      }
    </>
    <>
*/}