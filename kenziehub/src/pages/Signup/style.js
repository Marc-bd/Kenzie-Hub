import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16.5rem;

  height: 402.69px;
  background-color: var(--black);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  h2 {
    margin: 55px 0px 22px 0px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h1 {
    margin-top: 80px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 140px;
  gap: 8px;
  height: 190px;
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 27px;
  height: 70px;
  display: flex;
  justify-content: space-around;

  a {
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;

    color: #868e96;
  }
`;

export const FormLogin = styled.form`
  height: 190px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
