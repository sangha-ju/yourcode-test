import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodayJobBox from "./TodayJobBox";
import WeeklyJobBox from "./WeeklyJobBox";

// images
import unCheck from "../images/group-3.png";
import Check from "../images/group-4.png";
import ScrollTopBtn from "./ScrollTopBtn";

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
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await fetch(
      "https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData",
    );
    const jsonData = await resp.json();
    setData(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  const { todayJobs, weeklyJobs } = data;

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
      {todayJobs && (
        <TodayJobBox
          gitName={todayJobs[0].name}
          gitPosition={todayJobs[0].position}
          gitTags={todayJobs[0].tags}
          gitDate={todayJobs[0].date}
          gitContents={todayJobs[0].contents}
          kakaoName={todayJobs[1].name}
          kakaoPosition={todayJobs[1].position}
          kakaoTags={todayJobs[1].tags}
          kakaoDate={todayJobs[1].date}
          kakaoContents={todayJobs[1].contents}
        />
      )}
      <WeeklyJobs>
        <strong>이번주 올라온 잡</strong>
      </WeeklyJobs>
      {weeklyJobs && (
        <WeeklyJobBox
          microName={weeklyJobs[0].name}
          microPosition={weeklyJobs[0].position}
          microTags={weeklyJobs[0].tags}
          microDate={weeklyJobs[0].date}
          microContents={weeklyJobs[0].contents}
          zigzagName={weeklyJobs[1].name}
          zigzagPosition={weeklyJobs[1].position}
          zigzagTags={weeklyJobs[1].tags}
          zigzagDate={weeklyJobs[1].date}
          zigzagContents={weeklyJobs[1].contents}
        />
      )}
      <ScrollTopBtn />
    </ContentsContainer>
  );
}

export default ContentsBox;
