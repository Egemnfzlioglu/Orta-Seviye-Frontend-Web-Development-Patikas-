import { useContext } from "react";
import { WeatherContext } from "../../context/Weather";

const Search = () => {
  const {
    search,
    setSearch,
    currentCity,
    err,
    fetchWeatherSearch,
  } = useContext(WeatherContext);

  const searchButton = () => {

    if (search.trim()) {
      fetchWeatherSearch(search);
    }
    else if (search === "") {
      return alert("arama kısmı boş bırakılamaz");

    }
    setSearch("");

  };

  return (

    err === "404" ?

      <>
        <div className="input-group mb-3 " >
          <a href="/"
            className="form-control text-a p-3 "

            aria-label="Example text with button addon"
            style={{
              textAlign: "center",
              textDecoration: "none",
              color: "#333",
              borderRadius: "2rem 0",
            }}
          >
            <h3>
              Ana sayfa
            </h3>
          </a>
        </div>

        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control city"
            placeholder={`Şehir Bulunamadı / ${search} ??`}
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            disabled
          />
        </div>

      </>
      :
      <>
        <div className="input-group mb-3 " >
          <input
            type="text"
            className="form-control p-3 "
            placeholder="Search"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ borderRadius: "1rem 0 0 0" }}
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon1"
            onClick={() => searchButton()}
            style={{ borderRadius: "0 0 1rem 0" }}
          >
            Search
          </button>
        </div>

        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control city"
            placeholder={`${currentCity.name} / ${currentCity.country}`}
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            disabled
          />
        </div>

      </>

  );
};

export default Search;

