import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  height: 3.125rem;
  gap: 8px;
`;

export const StyleLabel = styled.span`
  font-size: 0.6108rem;

  color: ${(props) => (props.setcolor === "white" ? "#f8f9fa" : "#868E96")};
`;

export const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 13.0293px;
  gap: 8.14px;
  color: var(--white);

  width: 15rem;
  height: 38.5px;

  background: #343b41;
  /* grey-0 */

  border: ${(props) =>
    props.setborder === "grey" ? "none" : "0.9772px solid #f8f9fa"};

  border-radius: 3.20867px;
`;
