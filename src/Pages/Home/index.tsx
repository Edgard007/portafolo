// Essential imports
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="container">
        <span>Home</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: calc(100vh - (${(props) => props.theme.heightMenu} * 2));
    display: flex;
    background: rgba(255, 255, 255, 0.3);
  }
`;

export default Home;
