// Essential imports
import { Layout } from "antd";
import styled from "styled-components";

//* ==> Components <== *//
import FloatingIcon from "./Components/floatingIcon";
import Menu from "./Layout/Menu";

//* ==> Pages <== *//
import Home from "./Pages/Home/index";
import AboutMe from "./Pages/AboutMe/index";

const { Content } = Layout;

const App = () => {
  return (
    <Wrapper>
      <FloatingIcon />
      <Menu />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme?.textColor};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #8c98a5;
  }
`;

export default App;
