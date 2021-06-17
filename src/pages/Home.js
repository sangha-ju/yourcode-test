import React from "react";
import styled from "styled-components";
import HeaderBox from "../components/HeaderBox";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <Container>
      <HeaderBox />
    </Container>
  );
}

export default Home;
