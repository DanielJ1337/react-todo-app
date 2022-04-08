import React from "react";

import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

import { ItemWrapper, IconWrapper, Container, styles } from "./styles";

const TodoItem = ({ tasksList, setTasksList, deleteTask, editTask }) => {
  /* ! how can I render only the
              currently edited item? */

  return (
    <Container>
      {tasksList?.map((item, index) => (
        <ItemWrapper key={item.id}>
          <p>{item.id}</p>
          <p key={index}>{item.content}</p>
          <IconWrapper>
            <TiDelete
              onClick={() => deleteTask(item)}
              style={Object.assign(styles.iconHover, styles.iconMarginLeft)}
            />
            <FiEdit onClick={() => editTask(item)} style={styles.iconHover} />
          </IconWrapper>
        </ItemWrapper>
      ))}
    </Container>
  );
};

export default TodoItem;
