function TextArea({ setTextArea, textArea }) {
  return (
    <>
      <div className="form-floating  ">
        <textarea
          className="form-control text "
          placeholder="Enter Your Note Here..."
          id="floatingTextarea"
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        ></textarea>
        <label htmlFor="floatingTextarea" style={{ padding: "1rem 1.5rem" }}>
          Enter Your Note Here...
        </label>
      </div>
    </>
  );
}

export default TextArea;
