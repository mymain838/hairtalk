import Welcome from "../../components/Welcome";

// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// const Wrapper = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//   @media screen and (max-width: 920px) {
//     align-items: start;
//     padding-top: 60px;
//   }
// `;

// const SignContainer = styled.div`
//   display: flex;
//   position: relative;
//   align-items: center;
//   width: 920px;
//   height: 530px;
//   background-image: url("/signup_banner.png");
//   background-size: cover;
//   background-repeat: no-repeat;
//   border-radius: 25px;
//   padding: 20px;
//   font-weight: 600;
//   gap: 50px;
//   @media screen and (max-width: 920px) {
//     flex-direction: column;
//     background-image: none;
//     gap: 0px;
//   }
// `;

// const LeftContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 20px;
//   width: 50%;
//   height: 100%;

//   @media screen and (max-width: 920px) {
//     width: 100%;
//   }
// `;

// const RightContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   align-items: center;
//   color: #ff69b4;
//   width: 50%;
//   height: 100%;
//   @media screen and (max-width: 920px) {
//   }
// `;

// const LeftTitle = styled.span`
//   font-size: 80px;
//   color: violet;
//   @media screen and (max-width: 920px) {
//     font-size: 80px;
//     color: ${({ theme }) => theme.titleColor};
//   }
// `;

// const LeftContent = styled.span`
//   font-size: 30px;
//   text-align: center;
//   width: 60%;
//   color: black;
//   @media screen and (max-width: 920px) {
//     width: 300px;
//     color: ${({ theme }) => theme.textColor};
//   }
// `;

// const RightTitle = styled.span`
//   font-size: 80px;
//   margin-bottom: 30px;
//   @media screen and (max-width: 920px) {
//     display: none;
//   }
// `;

// const Form = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 60px;
//   @media screen and (max-width: 920px) {
//     width: 400px;
//   }
// `;

// const Social = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;

//   @media screen and (max-width: 920px) {
//     margin-top: 20px;
//   }
// `;

// const Input = styled.input`
//   background-color: #d2e5c6;
//   width: 80%;
//   padding-top: 14px;
//   padding-bottom: 14px;
//   padding-left: 20px;
//   padding-right: 20px;
//   border: none;
//   border-radius: 25px;
//   margin-bottom: 20px;
//   font-size: 20px;
//   &[type="button"] {
//     cursor: pointer;
//     color: white;
//     font-weight: 600;
//     background-color: violet;
//     &:hover {
//       opacity: 0.8;
//     }
//   }
//   @media screen and (max-width: 920px) {
//   }
// `;

// const Kakao = styled.img`
//   cursor: pointer;
//   width: 160px;
//   &:hover {
//     opacity: 0.8;
//   }
//   @media screen and (max-width: 920px) {
//   }
// `;

// export default function Login() {
//   return (
//     <Wrapper>
//       <SignContainer name="1">
//         <LeftContainer>
//           <LeftTitle>Hairtalk</LeftTitle>
//           <LeftContent>
//             현재 100명의 사용자가 HairTalk을 사용하고 있습니다
//           </LeftContent>
//         </LeftContainer>
//         <RightContainer>
//           <RightTitle>Login</RightTitle>
//           <Form>
//             <Input type="email" placeholder="이메일" required></Input>
//             <Input type="password" placeholder="비밀번호" required></Input>
//             <Input type="button" value="로그인"></Input>
//             <Social>
//               <Kakao src="/Kakao.png" alt="카카오 로그인"></Kakao>
//               <Kakao src="/Kakao.png" alt="카카오 로그인"></Kakao>
//               <Kakao src="/Kakao.png" alt="카카오 로그인"></Kakao>
//               <Kakao src="/Kakao.png" alt="카카오 로그인"></Kakao>
//             </Social>
//           </Form>
//         </RightContainer>
//       </SignContainer>
//     </Wrapper>
//   );
// }

export default function Login() {
  return <Welcome page={"login"} />;
}
