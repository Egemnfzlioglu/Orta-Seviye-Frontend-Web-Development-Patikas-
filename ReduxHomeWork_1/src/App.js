import "./App.css";
import Header from "./components/Header";
// import Search from "./components/Search";
import Notes from "./components/Notes";
import TextAreaInput from "./components/TextAreaInput";

function App() {
  
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row d-flex textArea ">
          <div className=" col-lg-4  ">
            <TextAreaInput />
          </div>
          <div className=" col-lg-8  ">
            <Notes />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
