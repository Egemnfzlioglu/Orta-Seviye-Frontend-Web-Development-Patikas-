import React from "react";

function Section(props) {
  const { todosAll, handleComplete, handleDelete, editTodo } = props;
  return (
    <>
      {todosAll &&
        todosAll.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.isCompleted === true ? "completed" : ""}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onChange={() => handleComplete(todo.id)}
                  checked={todo.isCompleted}
                />

                <label
                  onClick={() =>
                    editTodo(todo.id, prompt("Edit Todo", todo.text))
                  }
                >
                  {todo.title}
                </label>
                <button
                  className="destroy"
                  onClick={() => handleDelete(todo.id)}
                ></button>
              </div>
            </li>
          );
        })}
    </>
  );
}

export default Section;
