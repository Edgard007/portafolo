import styled from "styled-components";

//* ==> Data <== *//
import { data } from "./dataMenu";

const ContentMenu = () => {
  return (
    <Wrapper>
      <div className="containerLeft">
        <div className="containerItems">
          {data &&
            data.map((el) => (
              <span className="menu__items">{el?.namePath}</span>
            ))}
        </div>
      </div>
      <div className="containerRigth"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;

  .containerLeft {
    width: 80%;
    background-color: #ffff;
    height: 100vh;
    animation-duration: 0.5s;
    animation-name: slideInRight;

    display: flex;
    align-items: center;
  }

  .containerItems {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px 25px;
    width: 80%;
    height: 80%;

    animation-duration: 1.5s;
    animation-name: appeared;
    opacity: 1;
  }

  .menu__items {
    position: relative;
    color: #000000bf;
    font-weight: bold;
    font-size: 25px;
    padding: 5px;
    text-align: left;
    margin-bottom: 20px;

    &::before {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 0;
      height: 4px;
      background-color: ${(props) => props.theme?.primaryColor};
      transition: all 0.3s;
    }

    &:hover::before {
      width: 100%;
    }
  }

  .containerRigth {
    position: absolute;
    right: 0;
    width: 20%;
    height: 100vh;
    background-color: #233df9;
    animation-duration: 1.5s;
    animation-name: appeared;
    opacity: 1;
  }

  @keyframes slideInRight {
    from {
      width: 0%;
    }

    to {
      width: 80%;
    }
  }

  @keyframes appeared {
    from {
      opacity: 0;
    }

    25% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export default ContentMenu;
