import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../redux/Notes/NotesSlice";
import { nanoid } from "@reduxjs/toolkit";
import Color from "./Color";
import TextArea from "./TextArea";
import alertify from "alertifyjs";
import PreviewContent from "./PreviewContent";
import Search from "./Search";

function TextAreaInput() {
  const [textArea, setTextArea] = useState("");
  const [clickColor, setClickColor] = useState(null);

  const date = new Date().toLocaleString("tr");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (textArea === "") {
      return alertify.error("Yazı Alanı Boş Olamaz!!!");
    }
    if (clickColor === null) {
      return alertify.error("Lütfen Renk Giriniz!!!");
    }
    if (textArea.trim()) {
      dispatch(
        addNotes({
          id: nanoid(),
          content: textArea,
          date,
          color: clickColor,
        })
      );
      alertify.success("EKLEME İŞLEMİ BAŞARILI !..");
    }
    setTextArea("");
    setClickColor(null);
  };

  const cleanBoard = () => {
    if (textArea === "" || clickColor === "") return alertify.alert("BOŞ ALAN");
    else {
      if (window.confirm("SİLMEK İSTEDİĞİNE EMİN MİSİN ??")) {
        if (
          window.confirm("SON KEZ SORUYORUM :D SİLMEK İSTEDİĞİNE EMİN MİSİN ??")
        ) {
          setTextArea("");
          setClickColor(null);
        }
      }
    }
  };

  return (
    <>
      <Search />

      <div className="leftSide sticky-top ">
        <div className=" mb-3  ">
          {/* TEXTAREA  */}

          <TextArea setTextArea={setTextArea} textArea={textArea} />

          {/* COLORS */}

          <Color setClickColor={setClickColor} />
          {/* BUTTON  */}

          <div className="button ">
            <button
              type="submit"
              className="btn btn-success "
              onClick={() => handleSubmit()}
            >
              ADD
            </button>
          </div>
          {/* */}

          <PreviewContent
            textArea={textArea}
            clickColor={clickColor}
            cleanBoard={cleanBoard}
            date={date}
          />
        </div>{" "}
      </div>
    </>
  );
}

export default TextAreaInput;
