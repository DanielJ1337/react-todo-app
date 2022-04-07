import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  form {
    display: flex;
    width: 100%;
    input::placeholder {
      color: inherit;
    }
  }
`;

const styles = {
  inputField: {
    width: "100%",
    padding: "1rem",
    border: "1px solid var(--purple)",
    background: "inherit",
    color: "#fff",
    outline: "none",
    borderTopLeftRadius: "var(--rounded-corners",
    borderBottomLeftRadius: "var(--rounded-corners",
  },
  button: {
    width: "50%",
    border: "none",
    background:
      "linear-gradient(90deg, var(--purple) 0%, var(--purple-2) 100%)",
    color: "#fff",
    fontWeight: "bold",
    borderTopRightRadius: "var(--rounded-corners)",
    borderBottomRightRadius: "var(--rounded-corners)",
  },
};

export { Container, styles };
