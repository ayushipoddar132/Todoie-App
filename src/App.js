import React from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";

import "./style.css";

const App = () => {
  return (
    <div className="todo-container">
      <Header />
      <TodoItem  text="Eat"/>
      <TodoItem  text="code"/>
      <TodoItem text="play"/>
      <TodoItem text="study"/>
      <TodoItem text="sleep"/>
      <Button />
    </div>
  );
};

export default App;
