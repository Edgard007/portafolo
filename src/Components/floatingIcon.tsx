/**
 * View components, Floating icon
 */

import styled from "styled-components";

//* ==> Assets <== *//
import iconLinkedin from "../Assets/linkedin.svg";

const FloatingIcon = () => {
  return (
    <Wrapper>
      <a
        href="https://www.linkedin.com/in/edgard007/"
        target="_blank"
        rel="noopener noreferrer"
        className="floatingIcon"
      >
        <img src={iconLinkedin} alt="floatingIcon" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .floatingIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10px;
    bottom: 1rem;
    right: 1rem;
  }

  .floatingIcon::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #0077b7;
    opacity: 0.9;
    animation: onda 1s infinite ease;
  }

  @keyframes onda {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }

  .floatingIcon img {
    position: relative;
    display: block;
    width: 35px;
    height: 35px;
  }
`;

export default FloatingIcon;
