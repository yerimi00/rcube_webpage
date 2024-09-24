import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/common/Header";

function Main() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  height: 100vh;
`;
