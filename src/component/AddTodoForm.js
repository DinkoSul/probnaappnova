import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const AddTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const newItemValue = event.target.value;
    setNewItem(newItemValue);
  };

  const handleAddTodoClick = (event) => {
    event.preventDefault();

    if (!newItem || !newItem.trim()) {
      return;
    }

    addTodo(newItem);
    setNewItem("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Form>
      <InputGroup size="lg">
        <FormControl
          placeholder="Add todo"
          onChange={handleChange}
          value={newItem}
          autoFocus
          ref={inputRef}
        />
        <InputGroup>
          <Button
            variant="outline-secondary"
            onClick={handleAddTodoClick}
            type="submit"
          >
            Add
          </Button>
        </InputGroup>
      </InputGroup>
    </Form>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func,
};

export default AddTodoForm;
