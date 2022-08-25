const Search = ({ search, setSearch,  currentCity,fetchWeatherSearch }) => {


  const searchButton = () => {
    
    if (search.trim()) {
      fetchWeatherSearch(search);
  }
      else if (search === "") {
        return alert("arama kısmı boş bırakılamaz");
        
      } else if (search.length < 3) {
        alert("Minimum 3 Karakter Girmeniz Gerekmektedir!..");
        setSearch(search);
      }
  
  };

  return (
    <>
      <div className="input-group mb-3 " >
        <input
          type="text"
          className="form-control p-3 "
          placeholder="Search"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          value={search.lenght}
          onChange={(e) => setSearch(e.target.value)}
          style={{borderRadius:"1rem 0 0 0"}}
        />
        <button
          className="btn btn-secondary"
          type="button"
          id="button-addon1"
          onClick={() => searchButton()}
          style={{borderRadius:"0 0 1rem 0"}}
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

/*<div className="form">
<input
  className="form-control form-control-lg"
  type="text"
  placeholder="Search"
  value={searchCity}
  onChange={e=>setSearchCity(e.target.value)}
/>
<button className="btn btn-primary"
onClick={()=>searchButton()}
>Search</button>
</div>*/
