import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const Header = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #dad7d7;
`;
const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 15px;
  right: 25px;
  width: 40px;
  height: 40px;
  border: 2px solid grey;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 9.8;
    box-shadow: 1px 1px 1px black;
  }
`;
const nav_open = keyframes`

100%{
  transform: scaleX(1);
}
`;
const nav_close = keyframes`
0%{
  transform: scaleX(1);
}
100%{

  transform: scaleX(-1);
}
`;
const Img = styled.img`
  transform: scaleX(-1);
  animation: ${(props) =>
    props.$nav !== 'init' &&
    (props.$nav === 'true'
      ? css`
          ${nav_open} 0.5s  forwards
        `
      : css`
          ${nav_close} 0.5s forwards
        `)};
`;

const Title = styled.span`
  position: fixed;
  top: 20px;
  left: 45%;
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 5px;
`;

const side_open = keyframes`
100%{
  right : 0px;
}
`;
const side_close = keyframes`
0%{
  right : 0px;
}
100%{
  right : -300px;
}
`;
const Side = styled.div`
  position: fixed;
  top: 80px;
  right: -300px;
  width: 300px;
  height: 100%;
  background: url('/Side.jpg') no-repeat center center / cover;
  animation: ${(props) =>
    props.$nav !== 'init' &&
    (props.$nav === 'true'
      ? css`
          ${side_open} 0.5s  forwards
        `
      : css`
          ${side_close} 0.5s forwards
        `)};
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: #000000bd;
  }
`;

export default function Nav() {
  const [show, setShow] = useState('init');
  const onClick = () => {
    show !== 'true' ? setShow('true') : setShow('false');
  };

  return (
    <>
      <Header>
        <NavBtn onClick={onClick}>
          <Img $nav={show} src="/Nav.png"></Img>
        </NavBtn>
        <Title>HairTalk</Title>
      </Header>
      <Outlet />
      <Side $nav={show}></Side>
    </>
  );
}
