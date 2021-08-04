/**
 * View components, Floating icon
 */

import styled from "styled-components";

//* ==> Assets <== *//
import iconWhatsApp from "../assets/whatsapp.svg";

const FloatingIcon = () => {
  return (
    <Wrapper>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="floatingIcon"
      >
        <img src={iconWhatsApp} alt="whatsappIcon" />
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
    background-color: #4bca5a;
    opacity: 0.9;
    animation: onda 1s infinite ease;
  }

  @keyframes onda {
    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  .floatingIcon img {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
  }
`;

export default FloatingIcon;
