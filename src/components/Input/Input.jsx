import React from "react";

import { Container, styles } from "./styles";

const Input = ({
  task,
  setTask,
  handleSubmit,
  submitEdit,
  currentlyEditing,
}) => {
  return (
    <Container>
      <form type='submit' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add Todo'
          style={styles.inputField}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit' style={styles.button} onClick={handleSubmit}>
          Add
        </button>
      </form>
    </Container>
  );
};

export default Input;
