import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";

const TodoList = ({ toggleTodo, removeTodo, todos }) => {
  return (
    <ListGroup>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ListGroup>
  );
};

export default TodoList;
