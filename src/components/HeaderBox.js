import React from "react";
import styled from "styled-components";
import remoters from "../images/remoters.png";
import remotersx2 from "../images/remoters@2x.png";
import search from "../images/search.png";
import wfh from "../images/wfh-1.png";

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

  img {
    width: 212px;
    margin-left: 200px;
  }
`;

const RegistrationBtn = styled.button`
  width: 240px;
  height: 50px;
  margin-right: 200px;
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

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  margin: 100px 0 0 200px;

  p {
    margin-top: 10px;
    font-size: 25px;
    font-weight: 500;
  }
`;

const LogoImg = styled.img`
  width: 320px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  height: 55px;
  margin-top: 100px;
  padding-left: 25px;
  background-color: #ffffff;
  border-radius: 40px;
  box-shadow: 0 6px 39px 0 rgba(165, 165, 165, 0.31);

  input {
    width: 80%;
    height: 80%;
    border: none;
    outline: none;
    font-size: 20px;
  }

  img {
    margin-top: 5px;
    cursor: pointer;
  }
`;

const HumanImg = styled.img`
  margin-left: 100px;
`;

function HeaderBox() {
  return (
    <Container>
      <Header>
        <img src={remoters} alt="header.img" />
        <RegistrationBtn>회사 등록하기</RegistrationBtn>
      </Header>
      <ContentBox>
        <div>
          <LogoImg src={remotersx2} alt="img" />
          <p>[명사] 시간과 공간의 제약을 받지않고 일하는 사람</p>
          <InputBox>
            <input />
            <img src={search} alt="search" />
          </InputBox>
        </div>
        <HumanImg src={wfh} alt="img" />
      </ContentBox>
    </Container>
  );
}

export default HeaderBox;
