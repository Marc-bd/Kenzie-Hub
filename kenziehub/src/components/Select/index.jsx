import { StyleLabel } from "../Input/style";
import { Container, StyledOption, StyledSelect } from "./style";

const SelectContainer = ({
  label,
  modulo,
  register,
  name,
  error,
  selectedStatus,
  ...rest
}) => {
  return (
    <Container>
      <StyleLabel>
        {" "}
        {label} {!!error && <span> - {error} </span>}{" "}
      </StyleLabel>
      <StyledSelect defaultValue={selectedStatus} {...register(name)} {...rest}>
        <StyledOption value=""></StyledOption>
        {modulo.map((item, index) => (
          <StyledOption key={index}>{item}</StyledOption>
        ))}
      </StyledSelect>
    </Container>
  );
};

export default SelectContainer;
