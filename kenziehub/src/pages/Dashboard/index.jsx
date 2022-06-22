import TextButton from "../../components/TextButton";
import {
  StyledSubTitle,
  StyledTitle,
  StyleLabel,
} from "../../components/Typografy/styles";
import { StyledHeader } from "../Register/style";
import {
  ContainerApresentation,
  ContainerDash,
  ContainerList,
  ContainerTec,
} from "./style";
import { FiPlus } from "react-icons/fi";
import Teclist from "../../components/TecList";
import { useEffect, useState } from "react";
import React from "react";
import ModalAdd from "../../components/ModalAdd";
import api from "../../services/api";
import { Redirect, useHistory } from "react-router-dom";

const Dashboard = ({ setcolor, authenticated, setAuthenticated }) => {
  const [openModal, setOpenModal] = useState(false);
  const [techs, setTechs] = useState([]);
  const [user, setUser] = useState({});

  const modalOn = () => {
    setOpenModal(true);
    console.log(openModal);
  };

  const modalOf = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("@KenzieHub: user");
    localStorage.removeItem("@KenzieHub: token");
    setAuthenticated(false);
    return history.push("/");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@KenzieHub: user"));
    api
      .get(`/users/${user.user.id}`)
      .then((res) => {
        setTechs(res.data.techs);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [techs]);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <ContainerDash>
      <StyledHeader>
        <StyledTitle>KenzieHub</StyledTitle>
        <TextButton name="Sair" setcolor="black" onClick={logout} />
      </StyledHeader>
      <ContainerApresentation>
        <StyledSubTitle>Olá, {user.name}</StyledSubTitle>
        <StyleLabel setcolor={setcolor}>{user.course_module} </StyleLabel>
      </ContainerApresentation>
      <ContainerTec>
        <StyledSubTitle>Tecnologias</StyledSubTitle>
        <TextButton name={<FiPlus />} onClick={modalOn} />
        {openModal && (
          <ModalAdd
            nameHeader="Cadastrar Tecnologia"
            close={modalOf}
            setOpenModal={setOpenModal}
          />
        )}
      </ContainerTec>
      <div className="tecContainer">
        <ContainerList>
          <Teclist techs={techs} />
        </ContainerList>
      </div>
    </ContainerDash>
  );
};

export default Dashboard;
