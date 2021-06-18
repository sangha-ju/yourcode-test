import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import git from "../images/git.png";
import kakaoBank from "../images/kakaoBank.png";

const TodayJob = styled.div`
  width: 1055px;
  margin-top: 30px;
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;
  margin-bottom: 25px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 11px 7px 0 rgba(0, 0, 0, 0.04);
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImgBox = styled.div`
  width: 15%;
  padding-left: 30px;

  img {
    height: 100px;
  }
`;

const TextBox = styled.div`
  width: 55%;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Position = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Tags = styled.button`
  height: 25px;
  border: 1px solid #4756df;
  border-radius: 17px;
  background: none;
  color: #4756df;
  font-size: 15px;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;

const DateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  padding-right: 30px;
`;

const SupportBtn = styled.button`
  width: 140px;
  height: 50px;
  background-color: #4756df;
  border: none;
  border-radius: 40px;
  font-size: 15px;
  color: #ffffff;
  box-shadow: 10px 10px 30px 0 rgba(67, 67, 67, 0.33);
  cursor: pointer;
`;

function TodayJobBox() {
  const [data, setData] = useState([]);
  const [leaveGit, setLeaveGit] = useState(false);
  const [leaveKakao, setLeaveKakao] = useState(false);

  const getData = async () => {
    const resp = await fetch(
      "https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData",
    );
    const jsonData = await resp.json();
    setData(jsonData);
  };

  const gitOverHandle = () => {
    setLeaveGit(true);
  };

  const kakaoOverHandle = () => {
    setLeaveKakao(true);
  };

  const clickSupport = () => {
    alert("지원이 완료 되었습니다.");
  };

  useEffect(() => {
    getData();
  }, []);

  const { todayJobs } = data;

  return (
    <TodayJob>
      <CardBox onMouseOver={gitOverHandle}>
        <ImgBox>
          <img src={git} alt="git-img" />
        </ImgBox>
        {todayJobs && (
          <TextBox>
            <Name>{todayJobs[0].name}</Name>
            <Position>{todayJobs[0].position}</Position>
            {todayJobs[0].tags.map((tag) => (
              <Tags>{tag}</Tags>
            ))}
          </TextBox>
        )}
        <DateBox>
          {todayJobs && (
            <Moment fromNow ago>
              {todayJobs[0].date}
            </Moment>
          )}
          {leaveGit ? (
            <SupportBtn onClick={clickSupport}>지원하기</SupportBtn>
          ) : (
            ""
          )}
        </DateBox>
      </CardBox>
      <CardBox onMouseOver={kakaoOverHandle}>
        <ImgBox>
          <img src={kakaoBank} alt="kakaoBank-img" />
        </ImgBox>
        {todayJobs && (
          <TextBox>
            <Name>{todayJobs[1].name}</Name>
            <Position>{todayJobs[1].position}</Position>
            {todayJobs[1].tags.map((tag) => (
              <Tags>{tag}</Tags>
            ))}
          </TextBox>
        )}
        <DateBox>
          {todayJobs && (
            <Moment fromNow ago>
              {todayJobs[1].date}
            </Moment>
          )}
          {leaveKakao ? (
            <SupportBtn onClick={clickSupport}>지원하기</SupportBtn>
          ) : (
            ""
          )}
        </DateBox>
      </CardBox>
    </TodayJob>
  );
}

export default TodayJobBox;