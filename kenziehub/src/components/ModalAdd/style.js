import styled from "styled-components";

export const MainModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ContainerModal = styled.div`
  display: fixed;
  background-color: var(--black);
  width: 100vw;
  height: 100vh;
  z-index: 5000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 17rem;

  width: 16rem;
  border-radius: 6px;
`;

export const HeaderModal = styled.div`
  display: flex;
  background-color: #343b41;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 4.5rem;
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  display: flex;
  flex-direction: row;
  width: 16rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 45px;
  border-radius: 5px 5px 0px 0px;

  h2 {
    font-size: 12px;
    color: var(--white);
  }

  h2,
  span {
    margin-left: 1.125rem;
  }

  button {
    height: 1.6875rem;
    width: 1.9375rem;
    padding: 0;
    border: none;
    background: transparent;
    color: #868e96;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const ContainerTec = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: space-around;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 15rem;
  justify-content: space-around;

  button {
    font-size: 12px;
    height: 2.4rem;
    width: 14rem;
    padding: 0;

    @media (min-width: 480px) {
      font-size: 1rem;
      height: 2.6875rem;
      width: 12.9375rem;
    }
  }
`;
