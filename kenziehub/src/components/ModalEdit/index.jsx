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
import TextButton from "../TextButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

const Modal = ({ nameHeader, close, item, setOpenModal }) => {
  const [changeModal, setChangeModal] = useState([{}]);

  const schema = yup.object().shape({
    status: yup.string().required("Campo Obrigatório!!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const niveis = ["Iniciante", "Médio", "Avançado"];

  const user = JSON.parse(localStorage.getItem("@KenzieHub: user"));

  const { id, title, status } = item;

  const onSubmit = (data) => {
    const { status } = data;
    const obj = { status };

    console.log(obj);

    api
      .put(`/users/techs/${id}`, obj, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia editada com sucesso");
        setOpenModal(false);
      })
      .catch((err) => {
        toast.error("Erro ao editar tecnologia");
        setOpenModal(false);
      });
  };

  const deletePost = () => {
    console.log(id);

    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia excluída com sucesso");
        setOpenModal(false);
      })
      .catch((err) => toast.error("Erro ao excluir tecnologia"));
  };

  return (
    <MainModal>
      <ContainerModal>
        <HeaderModal>
          <h2>{nameHeader}</h2>
          <button onClick={close}> x </button>
        </HeaderModal>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ContainerTec>
              <Input
                setborder="grey"
                label="Nome Tecnologia"
                name="title"
                value={title}
                register={register}
                disabled
              />

              <SelectContainer
                label="Status"
                modulo={niveis}
                register={register}
                name="status"
                selectedStatus={item.status}
              />
            </ContainerTec>
            <ContainerButtons>
              <ButtonText
                className="saveBtn"
                name="Salvar Alterações"
                model="litepink"
                type="submit"
              />
              <TextButton
                type="button"
                name="Excluir"
                className="delete"
                onClick={deletePost}
              />
            </ContainerButtons>
          </form>
        </div>
      </ContainerModal>
    </MainModal>
  );
};

export default Modal;
