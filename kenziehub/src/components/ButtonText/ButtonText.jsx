import { StyledButton } from "./style";

const ButtonText = ({ name, model, typebutton, ...rest }) => {
  return (
    <>
      <StyledButton model={model} {...rest}>
        {name}
      </StyledButton>
    </>
  );
};

export default ButtonText;
