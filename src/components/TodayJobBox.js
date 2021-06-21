import React, { useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

// images
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

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const ImgBox = styled.div`
  width: 12%;
  padding-left: 30px;

  img {
    height: 100px;
  }
`;

const TextBox = styled.div`
  width: 65%;
  padding-left: 30px;
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
  width: 8%;
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

const GitInfoBox = styled.div`
  display: ${(props) => (props.gittoggle ? "" : "none")};
  width: 96%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 20px;
`;

const KakaoInfoBox = styled.div`
  display: ${(props) => (props.kakaotoggle ? "" : "none")};
  width: 96%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 20px;
`;

function TodayJobBox({
  gitName,
  gitPosition,
  gitTags,
  gitDate,
  gitContents,
  kakaoName,
  kakaoPosition,
  kakaoTags,
  kakaoDate,
  kakaoContents,
}) {
  const [leaveGit, setLeaveGit] = useState(false);
  const [leaveKakao, setLeaveKakao] = useState(false);
  const [gitToggle, setGitToggle] = useState(false);
  const [kakaoToggle, setKakaoToggle] = useState(false);

  const gitOverHandle = () => {
    setLeaveGit(true);
  };

  const kakaoOverHandle = () => {
    setLeaveKakao(true);
  };

  const gitToggleHandle = () => {
    setGitToggle(!gitToggle);
  };

  const kakaoToggleHandle = () => {
    setKakaoToggle(!kakaoToggle);
  };

  const clickSupport = () => {
    alert("지원이 완료 되었습니다.");
  };

  return (
    <TodayJob>
      <CardBox onMouseOver={gitOverHandle}>
        <InfoBox onClick={gitToggleHandle}>
          <ImgBox>
            <img src={git} alt="git-img" />
          </ImgBox>
          <TextBox>
            <Name>{gitName}</Name>
            <Position>{gitPosition}</Position>
            {gitTags.map((tag) => (
              <Tags>{tag}</Tags>
            ))}
          </TextBox>
          <DateBox>
            <Moment fromNow ago>
              {gitDate}
            </Moment>
          </DateBox>
        </InfoBox>
        {leaveGit ? (
          <SupportBtn onClick={clickSupport}>지원하기</SupportBtn>
        ) : (
          ""
        )}
      </CardBox>
      <SlideDown>
        {gitToggle ? (
          <GitInfoBox gittoggle={gitToggle}>{gitContents}</GitInfoBox>
        ) : (
          ""
        )}
      </SlideDown>
      <CardBox onMouseOver={kakaoOverHandle}>
        <InfoBox onClick={kakaoToggleHandle}>
          <ImgBox>
            <img src={kakaoBank} alt="kakaoBank-img" />
          </ImgBox>
          <TextBox>
            <Name>{kakaoName}</Name>
            <Position>{kakaoPosition}</Position>
            {kakaoTags.map((tag) => (
              <Tags>{tag}</Tags>
            ))}
          </TextBox>
          <DateBox>
            <Moment fromNow ago>
              {kakaoDate}
            </Moment>
          </DateBox>
        </InfoBox>
        {leaveKakao ? (
          <SupportBtn onClick={clickSupport}>지원하기</SupportBtn>
        ) : (
          ""
        )}
      </CardBox>
      <SlideDown>
        {kakaoToggle ? (
          <KakaoInfoBox kakaotoggle={kakaoToggle}>{kakaoContents}</KakaoInfoBox>
        ) : (
          ""
        )}
      </SlideDown>
    </TodayJob>
  );
}

export default TodayJobBox;
