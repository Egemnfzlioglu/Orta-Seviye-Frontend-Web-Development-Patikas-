import React from "react";

function PreviewContent({ clickColor, cleanBoard, textArea, date }) {
  return (
    <>
      <div className="row ">
        <div className="notes  ">
          <div className=" col-lg-8 col-md-5  ">
            <div className={`card ${clickColor}`}>
              <div
                className={`card-header sticky-top ${clickColor}`}
                style={{ fontSize: "1.1rem" }}
              >
                {" "}
                {/* Silme İşlemi Başı*/}
                <div className="trash">
                  {date}

                  <span
                    className="trash9"
                    onClick={() => {
                      cleanBoard();
                    }}
                  >
                    <i class="fa-solid fa-trash"/>
                  </span>
                </div>
                {/* Silme İşlemi Sonu*/}
              </div>
              <div className="card-body">
                <p className="card-text" style={{ fontSize: "1.1rem" }}>
                  {textArea}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(PreviewContent);
