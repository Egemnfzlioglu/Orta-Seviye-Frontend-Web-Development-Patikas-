import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { colorSelect } from "../redux/Notes/NotesSlice";

function Color({ setClickColor }) {
  const colors = useSelector((state) => state.notes.colors);
  const dispatch = useDispatch();

  return (
    <>
      <div className="color">
        <div className="hstack ">
          <h6 className=" " style={{ fontSize: "1.2rem", textAlign: "center" }}>
            Lütfen Renk Seçiniz:
          </h6>

          <ul className=" d-flex ">
            {colors.map((color) => (
              <li
                key={color.id}
                className={`${color.name} colorPadding  `}
                onClick={() => dispatch(colorSelect(setClickColor(color.name)))}
              ></li>
            ))}
          </ul>
        </div>
      </div>{" "}
    </>
  );
}

export default React.memo(Color);
