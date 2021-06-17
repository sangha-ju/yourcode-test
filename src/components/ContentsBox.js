import React from "react";
import styled from "styled-components";

// images
import unCheck from "../images/group-3.png";
import Check from "../images/group-4.png";

const ContentsContainer = styled.section`
  width: 1450px;
  background-color: #f9f9f9;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 175px;

  strong {
    margin-left: 200px;
    font-size: 25px;
    font-weight: 500;
  }

  div {
    display: flex;
    margin-right: 200px;
    cursor: pointer;

    span {
      font-size: 20px;
    }
  }
`;

const UnCheckImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const CheckImg = styled.img`
  width: 20px;
`;

function ContentsBox() {
  return (
    <ContentsContainer>
      <TitleBox>
        <strong>오늘 올라온 잡</strong>
        <div>
          <UnCheckImg src={unCheck} alt="unCheck" />
          <span>Non-IT-잡만 보기</span>
        </div>
      </TitleBox>
    </ContentsContainer>
  );
}

export default ContentsBox;
