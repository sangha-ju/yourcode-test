import React from "react";
import styled from "styled-components";
import remoters from "../images/remoters.png";

const Container = styled.section`
  width: 1450px;
  height: 750px;
  background-color: rgba(98, 115, 232, 0.1);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding-top: 100px;
`;

const Logo = styled.img`
  width: 212px;
  margin-left: 230px;
`;

const RegistrationBtn = styled.button`
  width: 240px;
  height: 50px;
  margin-right: 230px;
  outline: none;
  border: none;
  border-radius: 40px;
  background-color: #4756df;
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 10px 10px 30px 0 rgba(67, 67, 67, 0.33);
`;

function HeaderBox() {
  return (
    <Container>
      <Header>
        <Logo src={remoters} alt="header.img" />
        <RegistrationBtn>회사 등록하기</RegistrationBtn>
      </Header>
    </Container>
  );
}

export default HeaderBox;
