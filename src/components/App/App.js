import "./App.css";

import { Container, EditingWrapper, appStyles } from "./styles";
import { styles } from "../Input/styles";

// import components
import { Input, TodoItemsList } from "../../components";
import { useState, useRef } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const [editingID, setEditingID] = useState(null);
  const [editingText, setEditingText] = useState("");

  // * understood
  // when user clicks the add button the function execution prevents the form from reloading the page
  // then a new task object is created, consisting of id, content, and finished property
  // in the last step the state is updated with the the task
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      content: task,
      finished: false,
    };

    // setTasksList([...tasksList].concat(newTask));
    setTasksList((prevTask) => [...prevTask, newTask]);
    setTask("");
  };

  // * understood
  // What happens?
  // take the item you want to delete, create a new array with all the items where the id is not equal to the id of the item you want to delete
  // update the state with the remainingTasks

  const deleteTask = (itemToDelete) => {
    const remaindingTasks = tasksList.filter(
      (item) => item.id !== itemToDelete.id
    );
    setTasksList([...remaindingTasks]);
  };

  const editTask = (itemToEdit) => {
    setEditingText(itemToEdit.content);
    setEditingID(itemToEdit.id);
    if (currentlyEditing === false) {
      setCurrentlyEditing(true);
    }
  };

  // It works but I not completely understand why :D
  const submitEdit = (item) => {
    const updatedItems = tasksList.map((oldItem) =>
      oldItem.id === item.id ? (oldItem.content = editingText) : item.content
    );

    setTasksList((prevItem) => [...prevItem]);
    setCurrentlyEditing(false);
  };

  return (
    <div className='App'>
      <Container>
        <h1 style={appStyles.headingBottom}>What's on your mind?</h1>
        <Input handleSubmit={handleSubmit} task={task} setTask={setTask} />
        {!currentlyEditing ? (
          <TodoItemsList
            tasksList={tasksList}
            setTask={setTask}
            setTasksList={setTasksList}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ) : (
          <>
            {/* this part still does not work */}
            <form
              type='submit'
              onSubmit={(e) => {
                e.preventDefault();
              }}>
              {tasksList?.map((item) => (
                <div key={item.id}>
                  {editingID === item.id ? (
                    <EditingWrapper>
                      <input
                        style={styles.inputField}
                        type='text'
                        value={editingText}
                        onChange={(e) => {
                          setEditingText(e.target.value);
                        }}
                      />
                      <button
                        style={styles.button}
                        type='button'
                        onClick={() => submitEdit(item)}>
                        Submit Edit
                      </button>
                    </EditingWrapper>
                  ) : null}
                </div>
              ))}
            </form>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
