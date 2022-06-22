import { Container, ContainerInput, StyledInput, StyleLabel } from "./style";

export const Input = ({
  label,
  setborder,
  setcolor,
  error,
  register,
  name,
  ...rest
}) => {
  return (
    <Container>
      <StyleLabel setcolor={setcolor}>
        {label} {!!error && <span> - {error} </span>}
      </StyleLabel>
      <ContainerInput>
        <StyledInput setborder={setborder} {...register(name)} {...rest} />
      </ContainerInput>
    </Container>
  );
};
