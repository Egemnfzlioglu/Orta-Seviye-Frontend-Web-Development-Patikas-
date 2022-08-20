import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import SectionFooter from "./components/Section/SectionFooter";

function App() {
  // ### useState Hook
  const [todosAll, setTodosAll] = useState([]);
  const [todosText, setTodosText] = useState("");

  // ### localden gelen verileri getirme

  const getTodos = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodosAll(JSON.parse(todos));
    }
  };
  // ### useEffect Hook
  useEffect(() => {
    getTodos();
  }, []);

  // ### localStorage'a kaydetme
  const setItems = (items) => {
    localStorage.setItem("todos", JSON.stringify(items));
  };

  // ### input işlemleri
  const handleChange = (e) => {
    setTodosText(e.target.value);
  };

  // ### form işlemleri
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todosText.trim()) {
      const newTodo = {
        id: Date.now(),
        title: todosText,
        isCompleted: false,
      };

      setItems([...todosAll, newTodo]);
      setTodosAll([...todosAll, newTodo]);
      setTodosText("");
    } else {
      alert("Lütfen bir şeyler yazın");
    }
  };

  // ### silme işlemleri
  const handleDelete = (id) => {
    const newTodos = todosAll.filter((todo) => todo.id !== id);
    setTodosAll(newTodos);
    setItems(newTodos);
  };

  // ### düzenleme işlemleri
  const editTodo = (id, text) => {
    const newTodos = todosAll
      .map((todo) => {
        if (todo.id === id) {
          if (text.trim()) {
            todo.title = text;
            todo.isCompleted = false;
          } else {
            alert("Lütfen bir şeyler yazın");
            prompt("Edit Todo", todo.text);
          }
        }
        return todo;
      })
      .filter((todo) => todo.title.trim());
    setTodosAll(newTodos);
    setItems(newTodos);
  };

  // ### tamamlama işlemleri
  const handleComplete = (id) => {
    const newTodos = todosAll.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodosAll(newTodos);
    setItems(newTodos);
  };

  // ### clear işlemi
  const clearCompleted = () => {
    setTodosAll([]);
    setItems([]);
  };

 

  return (
    <>
      <section className="todoapp">
        <Header
          todosText={todosText}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
         
            <Section
              todosAll={todosAll}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              editTodo={editTodo}
            />
          </ul>
        </section>
        <SectionFooter
          todosAll={todosAll}
          clearCompleted={clearCompleted}
         
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
