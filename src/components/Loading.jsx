import Lottie from 'lottie-react';
import loadingLottie from '../assets/lottie/Loading.json';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function Loading() {
  return (
    <Wrapper>
      <Lottie animationData={loadingLottie}></Lottie>
    </Wrapper>
  );
}
