import { StyledSubTitle, StyleLabel } from "../Typografy/styles";
import { MainTec } from "./style";
import { useState } from "react";
import Modal from "../ModalEdit";

const Teclist = ({ techs, ...rest }) => {
  const [openModal, setOpenModal] = useState(false);
  const [idPost, setIdPost] = useState("");
  const [infos, setInfo] = useState("");

  const modalOn = (item) => {
    setOpenModal(true);
    setInfo(item);
  };
  const modalOf = () => {
    setOpenModal(!openModal);
  };

  return (
    <MainTec>
      <div>
        {techs?.map((item, index) => (
          <li key={index} id={item.id} onClick={() => modalOn(item)}>
            <StyledSubTitle>{item.title}</StyledSubTitle>
            <StyleLabel> {item.status}</StyleLabel>
          </li>
        ))}
      </div>
      {openModal && (
        <Modal
          nameHeader="Tecnologia Detalhes"
          close={modalOf}
          item={infos}
          setOpenModal={setOpenModal}
        />
      )}
    </MainTec>
  );
};

export default Teclist;
