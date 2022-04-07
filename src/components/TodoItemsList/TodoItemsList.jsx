import React from "react";

import { styles } from "./styles";

// import components

import TodoItem from "../TodoItem/TodoItem";

const TodoItemsList = ({
  tasksList,
  setTasksList,
  setTask,
  deleteTask,
  editTask,
}) => {
  return (
    <div style={styles.container}>
      <TodoItem
        tasksList={tasksList}
        setTasksList={setTasksList}
        setTask={setTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default TodoItemsList;
