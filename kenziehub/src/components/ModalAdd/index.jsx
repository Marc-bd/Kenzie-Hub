import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

import ButtonText from "../ButtonText/ButtonText";
import { Input } from "../Input";
import SelectContainer from "../Select";
import {
  ContainerModal,
  ContainerTec,
  HeaderModal,
  ContainerButtons,
  MainModal,
} from "./style";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ModalAdd = ({ nameHeader, close, setOpenModal }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório!!"),
    status: yup.string().required("Campo Obrigatório!!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const userData = JSON.parse(localStorage.getItem("@KenzieHub: user"));

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia adicionada com sucesso");
        setOpenModal(false);
      })
      .catch((err) => toast.error("Falha ao adicionar"));
  };

  const niveis = ["Iniciante", "Médio", "Avançado"];

  return (
    <MainModal>
      <ContainerModal>
        <HeaderModal>
          <h2>{nameHeader}</h2>
          <button onClick={close}> x </button>
        </HeaderModal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerTec>
            <Input
              setborder="grey"
              label="Nome"
              register={register}
              name="title"
            />
            <SelectContainer
              label="Selecionar status"
              modulo={niveis}
              register={register}
              name="status"
            />
          </ContainerTec>
          <ContainerButtons>
            <ButtonText
              className="saveBtn"
              name="Cadastrar Tecnologia"
              model="litepink"
              type="submit"
            />
          </ContainerButtons>
        </form>
      </ContainerModal>
    </MainModal>
  );
};

export default ModalAdd;
