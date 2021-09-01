import styled from "styled-components";

const ContentMenu = () => {
  return (
    <Wrapper>
      <div className="containerLeft"></div>
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
    background-color: pink;
    height: 100vh;
    animation-duration: 0.5s;
    animation-name: slideinOne;
  }

  .containerRigth {
    position: absolute;
    right: 0;
    width: 20%;
    height: 100vh;
    background-color: #233df9;
    animation-duration: 1.5s;
    animation-name: slidein;
    opacity: 1;
  }

  @keyframes slideinOne {
    from {
      width: 0%;
    }

    to {
      width: 80%;
    }
  }

  @keyframes slidein {
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
