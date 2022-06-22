import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: var(--pink);
  font-size: 1rem;
`;

export const StyledSubTitle = styled.h2`
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
`;

export const StyleLabel = styled.span`
  font-size: 0.6108rem;

  color: ${(props) => (props.setcolor === "white" ? "#f8f9fa" : "#868E96")};
`;
