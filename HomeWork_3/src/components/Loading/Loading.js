import React from "react";

const Loading = ({ err }) => {
  return (
    <div>
      <div className="container-fluid loading">
        {err ? "hata" : ""}{" "}
        <div className=" ">
          <strong className="me-4">
            Loading
            <span className="m-2">
              <div
                className="spinner-grow"
                style={{ width: "5px", height: "5px" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>{" "}
              <div
                className="spinner-grow"
                style={{ width: "5px", height: "5px" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>{" "}
              <div
                className="spinner-grow"
                style={{ width: "5px", height: "5px" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </span>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Loading;
