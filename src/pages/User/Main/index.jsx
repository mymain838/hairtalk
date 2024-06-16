import Lottie from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arrowLottie from '../../../assets/lottie/RightArrow.json';
import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.div``;
const Container = styled.div`
  display: grid;
  width: 100%;
  margin-top: 80px;
  grid-template-areas: 'side1 content side2';
  grid-template-columns: 1fr 60% 1fr;

  /* background-color: blue; */
`;

const Side1 = styled.div`
  grid-area: 'side1';

  /* background-color: blue; */
`;
const Content = styled.div`
  position: relative;
  text-align: center;
  margin: 40px auto;
  width: 100%;
  grid-area: 'content';
`;

const Banner = styled.img`
  width: 100%;
  height: 10%;
  border-radius: 20px;
  margin-bottom: 30px;
`;

const Premium = styled.span`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 5px;
  color: tomato;
`;
const Hot = styled.span`
  font-size: 23px;
  font-weight: 650;
  letter-spacing: 4px;
  color: #00acee;
`;
const Normal = styled.span`
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 4px;
  color: #282828;
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  &.scroll {
    flex-wrap: nowrap;
    overflow-x: scroll;
    max-width: 910px;

    /* &::-webkit-scrollbar {
      width: 9px;
    }
    &::-webkit-scrollbar-thumb {
      width: 248px;
      height: 9px;
      border-radius: 100px;
      background: #d9d9d9;
    }
    &::-webkit-scrollbar-track {
      background: transperant;
    } */
  }
  padding: 22px;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 430px;
  padding: 20px;
  border-radius: 30px;
  &.side {
    position: sticky;
    margin: 0;
    margin-top: 300px;
    padding: 0;
    top: 80px;
  }
`;

const CardImage = styled.img`
  width: 250px;
  height: 300px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  pointer-events: none;
`;

const CardContent = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 5px;
  flex-direction: column;
`;

const Name = styled.span`
  color: black;
  font-size: 15px;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Score = styled.span`
  color: black;
  font-size: 14px;
`;
const Price = styled.span`
  color: black;
  font-size: 17px;
  font-weight: 600;
`;
const Best = styled.div`
  color: black;
  gap: 20px;
  display: flex;
`;
const Hair = styled.span`
  color: black;
`;

const Arrow = styled.div`
  position: absolute;
  top: 390px;
  right: -130px;
  width: 150px;
  height: 150px;
  opacity: ${({ op }) => (op ? 1 - op.scrollLeft * 0.002 : 1)};
  cursor: default;
`;

const Side2 = styled.div`
  grid-area: 'side2';
  /* background-color: blue; */
`;

const Footer = styled.div`
  height: 100px;
  background-color: grey;
`;

export default function Main() {
  const navigate = useNavigate();
  const [bid, setBid] = useState('1');
  const containerRef = useRef(null);

  const [drag, setDrag] = useState(false);
  const [handling, setHandling] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const handleMouseDownEvent = (e) => {
    setDrag(true);
    if (containerRef.current) {
      setClickPoint(e.pageX);
      setScrollX(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMoveEvent = (e) => {
    if (!drag) return;
    setHandling(true);
    e.preventDefault();
    if (containerRef.current) {
      const move = e.pageX - clickPoint;

      containerRef.current.scrollLeft = scrollX - move;
    }
  };

  useEffect(() => {
    setInterval(() => {
      if (bid <= 4) {
        setBid(bid + 1);
      } else {
        setBid(1);
      }
    }, 2000);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Side1>
          <Card className="side">
            <CardImage src="/Side.jpg"></CardImage>
            <CardContent>
              <Name> 사이드 테스트</Name>
              <Score>3.5 / 4</Score>
              <Price>재료값 : 5000원</Price>
              <Best>
                Best :<Hair>투블럭</Hair>
                <Hair>가르마</Hair>
                <Hair>삭발</Hair>
              </Best>
            </CardContent>
          </Card>
        </Side1>
        <Content>
          <Banner src="/Banner.jpg"></Banner>
          <Premium> 프리미엄 디자이너 🔥 </Premium>
          <CardBox
            className="scroll"
            ref={containerRef}
            onMouseDown={handleMouseDownEvent}
            onMouseLeave={() => setDrag(false)}
            onMouseUp={() => {
              setDrag(false);
              setTimeout(() => {
                setHandling(false);
                console.log('준비완료');
              }, 200);
            }}
            onMouseMove={handleMouseMoveEvent}
          >
            <Card
              onClick={() => {
                if (!handling) {
                  navigate('/login');
                }
              }}
            >
              <CardImage src="/Side.jpg"></CardImage>
              <CardContent>
                <Name>디자이너 : 최강현</Name>
                <Score>3.5 / 4</Score>
                <Price>재료값 : 5000원</Price>
                <Best>
                  Best :<Hair>투블럭</Hair>
                  <Hair>가르마</Hair>
                  <Hair>삭발</Hair>
                </Best>
              </CardContent>
            </Card>
            <Card>
              <CardImage src="/Side.jpg"></CardImage>
              <CardContent>
                <Name> 디자이너 : 최강현</Name>
                <Score>3.5 / 4</Score>
                <Price>재료값 : 5000원</Price>
                <Best>
                  Best :<Hair>투블럭</Hair>
                  <Hair>가르마</Hair>
                  <Hair>삭발</Hair>
                </Best>
              </CardContent>
            </Card>
            <Card>
              <CardImage src="/Side.jpg"></CardImage>
              <CardContent>
                <Name>디자이너 : 최강현</Name>
                <Score>3.5 / 4</Score>
                <Price>재료값 : 5000원</Price>
                <Best>
                  Best :<Hair>투블럭</Hair>
                  <Hair>가르마</Hair>
                  <Hair>삭발</Hair>
                </Best>
              </CardContent>
            </Card>
            <Card>
              <CardImage src="/Side.jpg"></CardImage>
              <CardContent>
                <Name>디자이너 : 최강현</Name>
                <Score>3.5 / 4</Score>
                <Price>재료값 : 5000원</Price>
                <Best>
                  Best :<Hair>투블럭</Hair>
                  <Hair>가르마</Hair>
                  <Hair>삭발</Hair>
                </Best>
              </CardContent>
            </Card>
            <Card>
              <CardImage src="/Side.jpg"></CardImage>
              <CardContent>
                <Name>디자이너 : 최강현</Name>
                <Score>3.5 / 4</Score>
                <Price>재료값 : 5000원</Price>
                <Best>
                  Best :<Hair>투블럭</Hair>
                  <Hair>가르마</Hair>
                  <Hair>삭발</Hair>
                </Best>
              </CardContent>
            </Card>

            <Arrow op={containerRef.current}>
              <Lottie animationData={arrowLottie}></Lottie>
            </Arrow>
          </CardBox>
          <Hot> 떠오르는 디자이너 🔥</Hot>
          <CardBox>
            <Card>
              <CardImage></CardImage>
              <CardContent>
                <Name></Name>
                <Score></Score>
                <Price></Price>
                <Best>
                  <Hair></Hair>
                  <Hair></Hair>
                  <Hair></Hair>
                </Best>
              </CardContent>
            </Card>
          </CardBox>
          <Normal> 모든 디자이너 🔥 </Normal>
          <CardBox>
            <Card>
              <CardImage></CardImage>
              <CardContent>
                <Name></Name>
                <Score></Score>
                <Price></Price>
                <Best>
                  <Hair></Hair>
                  <Hair></Hair>
                  <Hair></Hair>
                </Best>
              </CardContent>
            </Card>
          </CardBox>
        </Content>
        <Side2>사이드2</Side2>
      </Container>
      <Footer></Footer>
    </Wrapper>
  );
}
