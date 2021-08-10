// Essential imports
import { Layout } from "antd";
import styled from "styled-components";

//* ==> Components <== *//
import FloatingIcon from "./Components/floatingIcon";
import Menu from "./Layout/Menu";

//* ==> Pages <== *//
import Home from "./Pages/Home/index";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Wrapper>
      <Layout style={{ minHeight: "100vh" }}>
        <FloatingIcon />
        <Layout className="site-layout">
          <Menu />
          <Content style={{ margin: "0 25px" }}>
            <Home />
          </Content>
          <Footer style={{ textAlign: "center", height: "4rem" }}>
            Francisco Edgardo Hernández Palacios ©2021
          </Footer>
        </Layout>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

export default App;
