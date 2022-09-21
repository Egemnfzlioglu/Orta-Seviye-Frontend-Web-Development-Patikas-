import React from "react";

function Header() {
  return (
    <>
      <div className="container-fluid header">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            {" "}
            <h1>NotesApp</h1>
          </div>
          <div className="col-md-4 d-flex">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <a
                href="https://github.com/Egemnfzlioglu"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919847.png?w=826&t=st=1663758611~exp=1663759211~hmac=151fd9421bddf9a004250f5ff65524f2678ae7bd6f3e38315ba6b47177a0ed8a"
                  alt="github"
                  style={{ width: "2rem" }}
                />
              </a>
              <br />
              Github
            </div>
            <div className="col-md-4">
              <a
                href="https://www.linkedin.com/in/egemen-fazlioglu/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="
                  https://wings-onboard.com/wp-content/uploads/2021/10/linkedin-logo.png
                  "
                  alt="linkedin"
                  style={{ width: "2rem" }}
                />
              </a>
              <br />
              linkedin
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Header);
