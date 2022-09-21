import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNotes } from "../redux/Notes/NotesSlice";
import alertify from "alertifyjs";
import Content from "./Content";

function Notes() {
  const notes = useSelector((state) => state.notes.items);
  const searchInput = useSelector((state) => state.notes.searchInput);
  const dispatch = useDispatch();

  const handleDelete = (id, content) => {
    if (
      window.confirm(
        `"${content.substring(0, 25)}"  Silmek İstediğinden Emin Misin?`
      )
    ) {
      dispatch(deleteNotes(id));
      alertify.success("SİLME İŞLEMİ BAŞARILI");
    }
  };

     const filtered = notes.filter((item) =>
    item.content.toLowerCase().includes(searchInput.toLowerCase())
  );



  


  return (
    <>
      <div className="row ">
        <div className="notes  ">
          {filtered?.map((note) => (
            <Content handleDelete={handleDelete} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}

export default React.memo(Notes);
