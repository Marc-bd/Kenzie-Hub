import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;
  border-radius: 4.06066px;
  color: var(--white);
  font-size: 16px;
  height: 38px;
  width: 15rem;

  ${(props) => {
    if (props.model === "litepink")
      return css`
        border: 1.2182px solid var(--litepink);
        background-color: var(--litepink);
      `;
    else if (props.model === "pink")
      return css`
        background-color: var(--pink);
        border: 1.2182px solid var(--pink);
      `;
    else if (props.model === "negativepink")
      return css`
        background-color: var(--negativepink);
        border: 1.2182px solid var(--negativepink);
      `;
    else if (props.model === "grey")
      return css`
        background-color: var(--grey);
        border: 1.2182px solid var(--grey);
      `;
    else if (props.model === "darkgrey")
      return css`
        background-color: var(--darkgrey);
        border: 1.2182px solid var(--darkgrey);
      `;
  }}
`;
