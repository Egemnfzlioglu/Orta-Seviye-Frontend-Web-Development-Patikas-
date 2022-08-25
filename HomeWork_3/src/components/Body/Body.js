import React from "react";

const Body = ({ weatherData }) => {
  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",backgroundColor:"#" }}
      >
        {weatherData.map((day,i) => (
          <div className="card mb-3 " style={{ width: "100%" }} key={i}>
            <div className="row g-0">
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                className="img-fluid rounded-start "
                alt="..."
              />

              <div className="col-md-12">
                <div className="card-body">
                  <h3 className="card-title">
                   
                      {day.dt_txt.slice(0, 11)}
                  </h3>
                  <p className="card-text">
                      <b> Min : </b>
                      {day.main.temp_min} °C
                  </p>
                  <p className="card-text">
                      <b> Max :</b> {day.main.temp_max} °C
                  </p>
                  <p className="card-text">
                      <b>Weather :</b> {`${day.weather[0].description}`}
                  </p>

                  <p className="card-text">
                      <b>Time :</b> {day.dt_txt.slice(11, 16)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
