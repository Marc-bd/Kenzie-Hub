import styled from "styled-components";

export const ContainerDash = styled.div`
  @media (min-width: 280px) {
    .tecContainer {
      display: flex;
      justify-content: center;
    }
  }
`;

export const ContainerApresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 4.5rem;
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);

  h2,
  span {
    margin-left: 1.125rem;
  }
`;

export const ContainerTec = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 7.5rem;
  align-items: center;
  button {
    font-size: 1.25rem;
    height: 1.6875rem;
    width: 1.9375rem;
    padding: 0;
  }

  @media (min-width: 280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15rem;
  align-items: center;
  margin-left: 1.125rem;
  background-color: var(--black);
  border-radius: 5px;

  @media (min-width: 520px) {
    width: 30rem;

    ol {
      width: 30rem;
      width: 30rem;
      display: flex;
      justify-content: center;

      li {
        width: 27rem;
      }
    }
  }
`;
