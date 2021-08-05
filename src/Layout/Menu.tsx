import styled from "styled-components";

//* ==> Data <== *//
import { data } from "./dataMenu";

const CustomMenu = () => {
  return (
    <Wrapper>
      <span className="nameApp">エドガード</span>
      <nav className="header__nav">
        <ul className="menu">
          {data &&
            data.map((i) => (
              <li className="menu__item">
                <a className="menu__link" href={i?.path}>
                  {i?.namePath}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 0 25px;
  top: 0;
  width: 100%;
  height: 4rem;
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
  }

  .menu {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
  }

  .menu__item {
    position: relative;
    padding: 10px;
  }

  .menu__link {
    position: relative;
    color: #0052ff;
    font-size: 15px;
    padding: 5px;

    &::before {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 0;
      height: 4px;
      background-color: #0052ff;
      transition: all 0.3s;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;

export default CustomMenu;
