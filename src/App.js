import React, { useEffect, useState } from "react";
import { VisibilityToolbar, AddTodoForm, TodoList } from "./component";
import { VISIBILITY_TYPES } from "./const";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [visibility, setVisibility] = useState(VISIBILITY_TYPES.ALL);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getVisibleTodos = () => {
    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    }

    if (visibility === VISIBILITY_TYPES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }

    return todos.filter((todo) => !todo.completed);
  };

  const handleAddTodo = (value) => {
    const newTodo = { id: crypto.randomUUID(), text: value, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleRemoveCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const handleVisibilityChange = (visibility) => {
    setVisibility(visibility);
  };

  const visibleTodos = getVisibleTodos();
  const hasCompletedTodos = todos.filter((todo) => !!todo.completed).length > 0;

  return (
    <div className="app">
      <h1 className="header">My tasks</h1>
      <VisibilityToolbar
        visibilityType={visibility}
        onVisibilityChange={handleVisibilityChange}
      />
      <div className="todo-container">
        <AddTodoForm addTodo={handleAddTodo} />
        <TodoList
          todos={visibleTodos}
          removeTodo={handleRemoveTodo}
          toggleTodo={handleToggleTodo}
        />
      </div>
      {hasCompletedTodos && (
        <span onClick={handleRemoveCompleted} className="btn-clear-all">
          Clear completed
        </span>
      )}
    </div>
  );
};

export default App;
