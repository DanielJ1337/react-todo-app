import styled from "styled-components";

const ItemWrapper = styled.div`
  &:nth-child(n) {
    background: var(--flickr-pink);
  }

  &:nth-child(2n) {
    background: var(--vivid-sky-blue);
  }

  &:nth-child(3n) {
    background: var(--dodger-blue);
  }

  &:nth-child(4n) {
    background: var(--byzantine);
  }

  background: var(--ultramarine-blue);
  text-align: left;
  padding: 1rem 1rem;
  color: #fff;
  border-radius: var(--rounded-corners);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Container = styled.div``;
const IconWrapper = styled.div``;

const styles = {
  iconHover: {
    cursor: "pointer",
  },
  iconMarginLeft: {
    marginLeft: ".5rem",
  },
};

export { Container, IconWrapper, ItemWrapper, styles };
