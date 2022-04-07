import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  overflow: hidden;
  background: #020024;
  padding: 3rem;
  border-radius: var(--big-rounded-corners);
  box-shadow: 0 0 10px 0 rgba(0 0 0 / 0.3), 0 0 10px 0 rgba(0 0 0 / 0.3),
    0 0 10px 0 rgba(0 0 0 / 0.3);
`;

const EditingWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const appStyles = {
  headingBottom: {
    marginBottom: "2rem",
  },
};

export { Container, EditingWrapper, appStyles };
