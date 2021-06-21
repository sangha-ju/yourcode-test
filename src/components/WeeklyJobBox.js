import React, { useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

// images
import micro from "../images/micro.png";
import zigzag from "../images/zigzag.png";

const WeeklyJob = styled.div`
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

const MicroInfoBox = styled.div`
  display: ${(props) => (props.microtoggle ? "" : "none")};
  width: 96%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 20px;
`;

const ZigzagInfoBox = styled.div`
  display: ${(props) => (props.zigzagtoggle ? "" : "none")};
  width: 96%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 20px;
`;

function WeeklyJobBox({
  microName,
  microPosition,
  microTags,
  microDate,
  microContents,
  zigzagName,
  zigzagPosition,
  zigzagTags,
  zigzagDate,
  zigzagContents,
}) {
  const [leaveMicro, setLeaveMicro] = useState(false);
  const [leaveZizag, setLeaveZigzag] = useState(false);
  const [microToggle, setMicroToggle] = useState(false);
  const [zigzagToggle, setZigzagToggle] = useState(false);

  const microOverHandle = () => {
    setLeaveMicro(true);
  };

  const zigzagOverHandle = () => {
    setLeaveZigzag(true);
  };

  const microToggleHandle = () => {
    setMicroToggle(!microToggle);
  };

  const zigzagToggleHandle = () => {
    setZigzagToggle(!zigzagToggle);
  };

  const clickSupport = () => {
    alert("지원이 완료 되었습니다.");
  };

  return (
    <WeeklyJob>
      <CardBox onMouseOver={microOverHandle}>
        <InfoBox onClick={microToggleHandle}>
          <ImgBox>
            <img src={micro} alt="micro-img" />
          </ImgBox>
          <TextBox>
            <Name>{microName}</Name>
            <Position>{microPosition}</Position>
            {microTags.map((tag) => (
              <Tags>{tag}</Tags>
            ))}
          </TextBox>
          <DateBox>
            <Moment fromNow ago>
              {microDate}
            </Moment>
          </DateBox>
        </InfoBox>
        {leaveMicro ? (
          <SupportBtn onClick={clickSupport}>지원하기</SupportBtn>
        ) : (
          ""
        )}
      </CardBox>
      <SlideDown>
        {microToggle ? (
          <MicroInfoBox microtoggle={microToggle}>{microContents}</MicroInfoBox>
        ) : (
          ""
        )}
      </SlideDown>
      <CardBox onMouseOver={zigzagOverHandle}>
        <InfoBox onClick={zigzagToggleHandle}>
          <ImgBox>
            <img src={zigzag} alt="kakaoBank-img" />
          </ImgBox>
          <TextBox>
            <Name>{zigzagName}</Name>
            <Position>{zigzagPosition}</Position>
            {zigzagTags.map((tag) => (
              <Tags>{tag}</Tags>
            ))}
          </TextBox>
          <DateBox>
            <Moment fromNow ago>
              {zigzagDate}
            </Moment>
          </DateBox>
        </InfoBox>
        {leaveZizag ? (
          <SupportBtn onClick={clickSupport}>지원하기</SupportBtn>
        ) : (
          ""
        )}
      </CardBox>
      <SlideDown>
        {zigzagToggle ? (
          <ZigzagInfoBox zigzagtoggle={zigzagToggle}>
            {zigzagContents}
          </ZigzagInfoBox>
        ) : (
          ""
        )}
      </SlideDown>
    </WeeklyJob>
  );
}

export default WeeklyJobBox;
