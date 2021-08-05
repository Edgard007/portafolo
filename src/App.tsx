import React from "react";
import { Layout, Breadcrumb } from "antd";
import styled from "styled-components";

//* ==> Components <== *//
import FloatingIcon from "./Components/floatingIcon";
import Menu from "./Layout/Menu";

const { Content, Footer } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Wrapper>
        <Layout style={{ minHeight: "100vh" }}>
          <FloatingIcon />
          <Layout className="site-layout">
            <Menu />
            <Content style={{ margin: "0 25px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Francisco Edgardo Hernández Palacios ©2021
            </Footer>
          </Layout>
        </Layout>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

export default App;
