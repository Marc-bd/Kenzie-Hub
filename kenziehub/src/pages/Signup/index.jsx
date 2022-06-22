import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link, useHistory, Redirect } from "react-router-dom";

import ButtonText from "../../components/ButtonText/ButtonText";
import { Input } from "../../components/Input";

import { StyledSubTitle, StyledTitle } from "../../components/Typografy/styles";
import {
  Container,
  ContainerCard,
  ContainerRegister,
  ContainerInput,
  FormLogin,
} from "./style";

const Signup = ({ setAuthenticated, authenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Campo Obrigatório!!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos!")
      .required("Campo Obrigatório!!"),
  });

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token } = res.data;
        const user = res.data;
        toast.success("Login efetuado com sucesso");
        localStorage.setItem("@KenzieHub: token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub: user", JSON.stringify(user));
        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha invalidos"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ContainerCard>
      <StyledTitle>KenzieHub</StyledTitle>

      <Container>
        <StyledSubTitle>Login</StyledSubTitle>
        <ContainerInput>
          <FormLogin onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              {...register("email")}
              error={errors.email?.message}
              label="Email"
              placeholder="Digite seu Email"
              type="email"
              setcolor="white"
            />
            <Input
              register={register}
              label="Senha"
              placeholder="Digite sua Senha"
              type="password"
              setcolor="white"
              {...register("password")}
              error={errors.password?.message}
            />
            <ButtonText name="Entrar" model="pink" type="submit" />
          </FormLogin>
        </ContainerInput>
        <ContainerRegister>
          <Link to="/register">Ainda não possui uma conta? </Link>

          <ButtonText name="Cadastrar" model="grey" />
        </ContainerRegister>
      </Container>
    </ContainerCard>
  );
};
export default Signup;
