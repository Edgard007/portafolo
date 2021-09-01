import { useState } from "react";

import styled from "styled-components";

//* ==> Data <== *//
import { data } from "./dataMenu";

//* ==> Components <== *//
import ContentMenu from "./ContentMenu";

const CustomMenu = () => {
  //* ==> STATES <== *//
  const [clickMenu, setClickMenu] = useState(false);

  return (
    <Wrapper>
      <span className="nameApp">エドガード</span>
      <nav className="header__nav">
        <ul className="menu">
          {data &&
            data.map((el, i) => (
              <li className="menu__item" key={i + 1}>
                <a className="menu__link" href={el?.path}>
                  {el?.namePath}
                </a>
              </li>
            ))}
        </ul>
        <div
          className="hamburguer-menu"
          onClick={() => setClickMenu((prev) => !prev)}
        >
          <span
            className={
              !clickMenu ? "ham__item" : "ham__item open_ham iHam_active"
            }
          ></span>
          <span
            className={
              !clickMenu ? "ham__item" : "ham__item open_ham iHam_active"
            }
          ></span>
          <span
            className={
              !clickMenu ? "ham__item" : "ham__item open_ham iHam_active"
            }
          ></span>
        </div>
        {clickMenu && <ContentMenu />}
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 0 50px;
  width: 100%;
  height: ${(props) => props.theme?.heightMenu};
  background-color: #ffff;
  box-shadow: 0 2px 5px rgb(0 48 136 / 20%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nameApp {
    font-size: 20px;
    font-weight: bold;
  }

  .header__nav {
    width: 60%;
    @media (max-width: 740px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;

    @media (max-width: 740px) {
      display: none;
    }
  }

  .menu__item {
    position: relative;
  }

  .menu__link {
    position: relative;
    color: ${(props) => props.theme?.primaryColor};
    font-size: 15px;
    padding: 5px;

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

  .hamburguer-menu {
    display: none;

    @media (max-width: 740px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      cursor: pointer;
      width: 3rem;
      height: 2rem;
      z-index: 10;
    }
  }

  .ham__item {
    display: block;
    height: 6px;
    width: 2.4rem;
    border-radius: 10px;
    margin-bottom: 6px;
    background-color: ${(props) => props.theme?.primaryColor};
    transition: all 0.4s;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }

  .open_ham {
    background-color: #ffffff;
  }

  .iHam_active:nth-child(1) {
    transform-origin: left;
    transform: rotate(42deg);
    width: 2.5rem;
  }
  .iHam_active:nth-child(2) {
    opacity: 0;
  }
  .iHam_active:nth-child(3) {
    transform-origin: left;
    transform: rotate(-42deg);
    width: 2.5rem;
  }
`;

export default CustomMenu;
