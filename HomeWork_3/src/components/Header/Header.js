import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar  navbar-light ">
        <div className="container-fluid d-flex">
          <div
            className="col-sm-12 navbar-text "
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
              <div className="col "></div>

            <div className="col-sm-6 ">
              {" "}
              <h3>
                Lütfen Şehir İsimlerini{" "}
                <b style={{ color: "#eee", textDecoration: "underline" }}>
                  Yanlış Girmeyin...
                </b>{" "}
              </h3>
            </div>
            <div className="col-xs-2 ">
              <h5
                className=" navbar-text"
                style={{ color: "#eee", textDecoration: "underline" }}
              >
                EGEMEN FAZLIOĞLU
              </h5>
            </div>
          </div>{" "}
        </div>{" "}
      </nav>
    </>
  );
};

export default Header;
