// Essential imports
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Wrapper id="aboutContain">
      <div className="container">
        <span>AboutMe</span>
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
`;

export default AboutMe;
