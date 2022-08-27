import "./App.css";
import { useContext } from "react";
import { WeatherContext } from "./context/Weather";


import Loading from "./components/Loading/Loading";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";

function App() {
  const {
    loading,
  } = useContext(WeatherContext);

  return (
    <>
      <>
        <Header />
        <Search
        />
      </>
      {loading ? <Loading /> : <Body />}
    </>
  );
}

export default App;




