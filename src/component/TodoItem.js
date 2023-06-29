import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  const handleToggleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const handleRemoveTodoClick = (event) => {
    event.stopPropagation();
    removeTodo(todo.id);
  };

  const textClass = todo.completed ? "todo-item__completed" : null;

  return (
    <ListGroup.Item className="todo-item">
      <span className="todo-item_item" onClick={handleToggleTodoClick}>
        <Form.Check readOnly checked={todo.completed} inline />
        <span className={textClass}>{todo.text}</span>
      </span>
      <span
        className="todo-item__delete-button"
        onClick={handleRemoveTodoClick}
      >
        ×
      </span>
    </ListGroup.Item>
  );
};

TodoItem.propTypes = {
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  todo: PropTypes.object,
};

export default TodoItem;
