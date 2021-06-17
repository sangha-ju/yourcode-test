import React from "react";
import styled from "styled-components";
import HeaderBox from "./HeaderBox";
import ContentsBox from "./ContentsBox";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function MainTemplate() {
  return (
    <Container>
      <HeaderBox />
      <ContentsBox />
    </Container>
  );
}

export default MainTemplate;
