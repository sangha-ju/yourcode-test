import React, { useEffect, useState } from "react";
import styled from "styled-components";
import scrollTopBtn from "../images/scrollTop.png";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 50px;

  img {
    height: 70px;
    margin-right: 200px;
    cursor: pointer;
  }
`;

function ScrollTopBtn() {
  const [isVisble, setIsVisble] = useState(false);

  const toggleVisbility = () => {
    if (window.pageYOffset > 300) {
      setIsVisble(true);
    } else {
      setIsVisble(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisbility);
  });

  return (
    <Container>
      {isVisble && (
        <img onClick={scrollTop} src={scrollTopBtn} alt="scrollTopBtn" />
      )}
    </Container>
  );
}

export default ScrollTopBtn;
