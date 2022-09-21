import { useDispatch } from "react-redux";
import { searchNote } from "../redux/Notes/NotesSlice";

function Search() {
  const dispatch = useDispatch();
  return (
    <>
      <div class="input-group mb-3   search ">
        <div className="form-floating ">
          <input
            type="text"
            className="form-control  "
            id="floatingInputGroup1"
            placeholder="Search"
            style={{ borderRadius: "2rem", padding: "0 1.5rem" }}
            onChange={(e) => dispatch(searchNote(e.target.value))}
          />

          <label
            htmlFor="floatingInputGroup1 "
            style={{ margin: "-.25rem 1rem" }}
          >
            Search
          </label>
        </div>
      </div>
    </>
  );
}

export default Search;
