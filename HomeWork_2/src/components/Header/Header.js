import React from "react";

function Header(props) {
  const { handleSubmit, handleChange, todosText } = props;
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={handleChange}
            value={todosText}
          />
        </form>
      </header>
    </>
  );
}

export default Header;
