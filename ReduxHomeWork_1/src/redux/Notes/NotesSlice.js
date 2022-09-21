import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : localStorage.setItem(
          "notes",
          JSON.stringify([
            {
              id: 2,
              content: `Merhaba,
       Ben Egemen Fazlıoğlu;
       Redux öğrenemeye Devam Ediyorum.  :)

      
      `,
              color: "text-bg-success",
              date: new Date().toLocaleString("tr"),
            },

            {
              id: 4,
              content: `Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
       Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
        and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
         very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
              color: "text-bg-secondary",
              date: new Date().toLocaleString("tr"),
            },
            {
              id: 5,
              content: `Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 
      Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
       Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
              color: "text-bg-warning",
              date: new Date().toLocaleString("tr"),
            },
            {
              id: 6,
              content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
              color: "text-bg-danger",
              date: new Date().toLocaleString("tr"),
            },
          ])
        ),

    colors: [
      { id: nanoid(), name: "text-bg-success" },
      { id: nanoid(), name: "text-bg-primary" },
      { id: nanoid(), name: "text-bg-secondary" },
      { id: nanoid(), name: "text-bg-warning" },
      { id: nanoid(), name: "text-bg-danger" },
    ],
    searchInput: "",
  },
  reducers: {
    addNotes: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    deleteNotes: (state, action) => {
      const id = action.payload;
      const deleteNote = state.items.filter((item) => item.id !== id);
      state.items = deleteNote;
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    colorSelect: (state, action) => {
      const { color } = action.payload;
      const colorSelect = state.colors.filter((item) => item.color === color);

      state.items = colorSelect;
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    searchNote: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { addNotes, deleteNotes, colorSelect, searchNote } =
  notesSlice.actions;
export default notesSlice.reducer;
