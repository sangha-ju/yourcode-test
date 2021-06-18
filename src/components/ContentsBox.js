import React, { useState } from "react";
import styled from "styled-components";
import TodayJobBox from "./TodayJobBox";
import WeeklyJobBox from "./WeeklyJobBox";

// images
import unCheck from "../images/group-3.png";
import Check from "../images/group-4.png";

const ContentsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1450px;
  padding-bottom: 170px;
  background-color: #f9f9f9;
`;

const TodayJobs = styled.div`
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
  margin-right: 20px;
`;

const CheckImg = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const WeeklyJobs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 175px;

  strong {
    margin-left: 200px;
    font-size: 25px;
    font-weight: 500;
  }
`;

function ContentsBox() {
  const [check, setCheck] = useState(false);

  const onCheckHandle = () => {
    setCheck(!check);
  };

  return (
    <ContentsContainer>
      <TodayJobs>
        <strong>오늘 올라온 잡</strong>
        <div onClick={onCheckHandle}>
          {check ? (
            <CheckImg src={Check} alt="check" />
          ) : (
            <UnCheckImg src={unCheck} alt="unCheck" />
          )}
          <span>Non-IT-잡만 보기</span>
        </div>
      </TodayJobs>
      <TodayJobBox />
      <WeeklyJobs>
        <strong>이번주 올라온 잡</strong>
      </WeeklyJobs>
      <WeeklyJobBox />
    </ContentsContainer>
  );
}

export default ContentsBox;
