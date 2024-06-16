import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import User from "./utils/proGuard/User";
import Admin from "./utils/proGuard/Admin";
import Dresser from "./utils/proGuard/Dresser";
import AdminMain from "./pages/Admin/Main";
import UserMain from "./pages/User/Main";
import DresserMain from "./pages/Dresser/Main";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Nav from "./components/Nav";
import Guard from "./components/Guard";
import DarkToggle from "./components/DarkToggle";
import { useRef } from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
const GlobalStyles = createGlobalStyle`
${reset}
*{
  box-sizing: border-box;
}

html{
     // 스크롤 부드럽게
     scroll-behavior: smooth;
     /* 드래그 방지 */
     -ms-user-select: none;
     -moz-user-select: -moz-none;
     -webkit-user-select: none;
     -khtml-user-select: none;
     user-select: none;
}
     
body{
  font-family: "Nanum Pen Script", cursive;
  font-size: 18px;
  transition-property: background;
  transition-duration: 1s;
  transition-timing-function: ease;
  background: ${({ theme }) => theme.bgColor};
}  

`;

function App() {
  const bodyRef = useRef();
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <DarkToggle />
        <Routes>
          <Route
            element={
              <>
                <Nav />
              </>
            }
          >
            <Route path="/" element={<UserMain />} />

            <Route path="/admin" element={<Admin />}>
              <Route path="/admin/" element={<AdminMain />}></Route>
              <Route path="/admin/id" element={<AdminMain />}></Route>
            </Route>

            <Route path="/user" element={<User />}>
              <Route path="/user/" element={<UserMain />}></Route>
            </Route>

            <Route path="/dresser" element={<Dresser />}>
              <Route path="/dresser/" element={<DresserMain />}></Route>
            </Route>

            {/* <Route path="*" element={<Error />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
