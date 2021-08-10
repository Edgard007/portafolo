// Essential imports
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper id="homeContain">
      <div className="container">
        <div className="animated-title">
          <div className="text-top">
            <div>
              <span>Edgard Palacios</span>
              <span>Jr FullStack Developer</span>
            </div>
          </div>
          <div className="text-bottom">
            <div>Trying to be the best!</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: calc(100vh - (${(props) => props.theme.heightMenu}));
    display: flex;
    background: rgba(255, 255, 255, 0.3);
  }

  @keyframes showTopText {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    60% {
      transform: translate3d(0, 50%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes showBottomText {
    0% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  .animated-title {
    color: #222;
    font-family: Roboto, Arial, sans-serif;
    height: 90vmin;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90vmin;
  }

  .animated-title > div {
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

  .animated-title > div div {
    font-size: 12vmin;
    padding: 2vmin 0;
    position: absolute;
  }

  .animated-title > div div span {
    display: block;
    font-size: 30px;
  }

  .animated-title > div.text-top {
    border-bottom: 1vmin solid #000;
    top: 0;
  }

  .animated-title > div.text-top div {
    animation: showTopText 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translate(0, 100%);
  }

  .animated-title > div.text-top div span:first-child {
    color: #767676;
    font-size: 40px;
  }

  .animated-title > div.text-bottom {
    bottom: 0;
  }

  .animated-title > div.text-bottom div {
    animation: showBottomText 0.5s;
    animation-delay: 1.75s;
    font-size: 60px;
    animation-fill-mode: forwards;
    top: 0;
    transform: translate(0, -100%);
  }
`;

export default Home;
