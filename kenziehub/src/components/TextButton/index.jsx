import { StyledButton } from "./style";

const TextButton = ({ name, setcolor, ...rest }) => {
  return (
    <>
      <StyledButton setcolor={setcolor} {...rest}>
        {name}
      </StyledButton>
    </>
  );
};

export default TextButton;
