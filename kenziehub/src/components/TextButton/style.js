import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px 16.2426px;
  gap: 10.15px;

  width: 55px;
  height: 32px;

  font-size: 12px;
  color: var(--white);

  background-color: ${(props) =>
    props.setcolor === "black" ? "#212529" : "#343B41"};

  border-radius: 4px;
  border: none;
`;
