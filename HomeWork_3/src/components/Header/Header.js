import React, { memo } from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar  navbar-light ">
        <div className="container-fluid d-flex">
          <div
            className="col-sm-12 navbar-text "
            style={{ display: "flex", justifyContent: "flex-end" }}
          >

            <div className="col-sm ">
              {" "}
              <h3>
                Lütfen Şehir İsimlerini{" "}
                <b style={{ color: "#eee", textDecoration: "underline" }}>
                  Yanlış Girmeyin...
                </b>{" "}
              </h3>
            </div>
            <div className="col-sm-3 ">
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

export default memo(Header);
