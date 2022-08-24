import React, { useState } from "react";

function SectionFooter(props) {
  const [activeClick, setActiveClick] = useState("all");

  const {
    clearCompleted,
    todosLeft,
    activeTodo,
    completedTodo,
    allTodo
  } = props;

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todosLeft()} </strong>
          items left
        </span>

        <ul class="filters">
          <li>
            <a
              href="#/"
              className={activeClick === "all" ? "selected" : ""}
              onClick={() => {
                setActiveClick("all");
                allTodo();
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeClick === "active" ? "selected" : ""}
              onClick={() => {
                setActiveClick("active");
                activeTodo();
              }}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeClick === "completed" ? "selected" : ""}
              onClick={() => {
                setActiveClick("completed");
                completedTodo();
              }}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default SectionFooter;
