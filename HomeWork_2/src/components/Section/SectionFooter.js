import React from "react";

function SectionFooter(props) {
  const { todosAll, clearCompleted } = props;
  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todosAll.length} </strong> 
          items left
        </span>

        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default SectionFooter;
