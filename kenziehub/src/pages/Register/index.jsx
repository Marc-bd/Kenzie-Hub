import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import ButtonText from "../../components/ButtonText/ButtonText";
import { Input } from "../../components/Input";
import { StyleLabel } from "../../components/Input/style";
import SelectContainer from "../../components/Select";
import TextButton from "../../components/TextButton";
import { StyledSubTitle, StyledTitle } from "../../components/Typografy/styles";
import {
  ContainerColor,
  ContainerRegister,
  ContainerTitle,
  FormRegister,
  StyledHeader,
} from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Register = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!!"),
    email: yup.string().email("Email Inválido").required("Campo Obrigatório!!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos!")
      .required("Campo Obrigatório!!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes!")
      .required("Campo Obrigatório!"),
    bio: yup.string().required("Campo Obrigatório!!"),
    contact: yup.string().required("Campo Obrigatório!!"),
    course_module: yup.string().required("Campo Obrigatório!!"),
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ name, password, email, bio, contact, course_module }) => {
    const user = { name, password, email, bio, contact, course_module };

    api
      .post("/users", user)
      .then((res) => {
        toast.success("Conta criada com sucesso!");
        history.push("/signup");
      })
      .catch((err) => toast.error("Erro ao criar a conta, tente outro email"));
  };

  const modulo = [
    "Primeiro Módulo",
    "Segundo Módulo",
    "Terceiro Módulo",
    "Quarto Módulo",
    "Quinto Módulo",
    "Sexto Módulo",
  ];

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ContainerRegister>
      <StyledHeader>
        <StyledTitle>KenzieHub</StyledTitle>
        <TextButton
          name="Sair"
          setcolor="black"
          onClick={() => history.push("/")}
        />
      </StyledHeader>
      <ContainerColor>
        <ContainerTitle>
          <StyledSubTitle>Crie sua Conta</StyledSubTitle>
          <StyleLabel>Rapido e grátis, vamos nessa</StyleLabel>
        </ContainerTitle>
        <FormRegister onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            label="Nome"
            placeholder="Digite aqui seu nome"
            type="text"
            setcolor="white"
            setborder="grey"
            name="name"
            error={errors.name?.message}
          />
          <Input
            register={register}
            label="Email"
            placeholder="Digite aqui seu email"
            type="email"
            setcolor="white"
            setborder="grey"
            name="email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            label="Senha"
            placeholder="Digite aqui sua senha"
            type="password"
            setcolor="white"
            setborder="grey"
            name="password"
            error={errors.password?.message}
          />
          <Input
            register={register}
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            type="password"
            setcolor="white"
            setborder="grey"
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />

          <Input
            register={register}
            label="Bio"
            placeholder="Fale sobre você"
            type="text"
            setcolor="white"
            setborder="grey"
            name="bio"
            error={errors.bio?.message}
          />

          <Input
            register={register}
            label="Contato"
            placeholder="Opção de Contato"
            type="text"
            setcolor="white"
            setborder="grey"
            name="contact"
            error={errors.contact?.message}
          />

          <SelectContainer
            label="Selecionar módulo"
            modulo={modulo}
            register={register}
            name="course_module"
            error={errors.course_module?.message}
          />
          <ButtonText model="pink" name="Cadastrar" type="submit" />
        </FormRegister>
      </ContainerColor>
    </ContainerRegister>
  );
};

export default Register;
